// CreateProject.js
import { Form, Field } from 'react-final-form';
import { useState } from 'react';

import StyledCreateProject from './StyledCreateProject';
import { BasicButton } from 'generalStyledComponents/Button';
import { useSession } from 'next-auth/react';
import { createProject } from 'services/projects';
import LogoSelectionModal from './LogoSelectionModal/LogoSelectionModal';
import { getProjectWeeklyStats } from 'services/projects';

const CreateProject = ({ handleClose, setProjects, projects }) => {
  const { data: session } = useSession();
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [logoModalVisibility, setLogoModalVisibility] = useState(false);

  const onSubmit = async (values) => {
    const projectObject = {
      ...values,
      organization: session.user?.organization,
      logo: selectedLogo || '/logos/defaultLogo.png',
    };
    const newProject = await createProject(projectObject);
    if(newProject){
      const { data: project } = newProject;
      getProjectWeeklyStats(project.id).then(res => {
        const projectToAdd={
          id: project.id,
          name: project.name,
          logo: project.logo,
          weeklyIssues: res.data,
        };
        setProjects([...projects, projectToAdd]);
      });
      // setProjects([...projects, newProject]);
      handleClose();
    }
  };

  const handleLogoSelection = (logo) => {
    setSelectedLogo(`/logos/${logo}`);
    setLogoModalVisibility(false);
  };

  return (
    <StyledCreateProject onClick={() => handleClose()}>
      <div
        className='modal-content'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Form
          onSubmit={onSubmit}
          initialValues={{ name: '' }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form>
              <h2>Create New Project</h2>
              <div>
                <label>{'Project\'s name'}</label>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div>
                <label>Project&apos;s logo</label>
                <BasicButton onClick={(e) => { e.preventDefault(); setLogoModalVisibility(true);}}>
                  Select logo
                </BasicButton>
                {logoModalVisibility && (
                  <LogoSelectionModal
                    handleLogoSelection={handleLogoSelection}
                    handleClose={() => setLogoModalVisibility(false)}
                  />
                )}
              </div>
              {selectedLogo && (
                <img
                  src={selectedLogo}
                  alt="Project logo preview"
                  width={60}
                  height={60}
                />
              )}
              <BasicButton onClick={(e) => { e.preventDefault(); handleSubmit(e);}} disabled={submitting || pristine}>
                Create
              </BasicButton>
            </form>
          )}
        />
      </div>
    </StyledCreateProject>
  );
};

export default CreateProject;
