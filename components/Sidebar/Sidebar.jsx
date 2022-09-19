import dynamic from 'next/dynamic';
import Link from 'next/link';
// import LetteredAvatar from 'react-lettered-avatar';
import { mainColor } from '../../generalStyledComponents/Pallete';
import { useRouter } from 'next/router';

import StyledSidebar from './StyledSidebar';


const Sidebar = () => {

  const DynamicComponentWithNoSSR = dynamic(
    () => import('react-lettered-avatar'),
    { ssr: false }
  );

  const organization = {
    name: 'fortOrg'
  };


  const base_url = `/organizations/${organization.name}`;
  const router = useRouter();
  console.log(router);
  return (
    <StyledSidebar>
      <div className='profile'>
        <div className='profile-picture' >
          <span>
            <DynamicComponentWithNoSSR
              name="Lettered Avatar"
              backgroundColor = {mainColor}
              size={35}
              radius={5}
            />
            {/* <img
              id='preview'
              src={createImageFromInitials(50, 'olivier paspuel', '#ccc')}
              alt='profile-pic'
            /> */}
          </span>
        </div>
        <div className='profile-name' ></div>
      </div>
      <div className='pages'>
        <div className='dashboard'>
          <Link href={`${base_url}/dashboard`}>
            <a>Dashboard</a>
          </Link>
        </div>
        <div className='projects'>
          <Link href={`${base_url}/projects`}>
            <a>Projects</a>
          </Link>
        </div>
        <div className='issues'>
          <Link href={`${base_url}/issues`}>
            <a>Issues</a>
          </Link>
        </div>
        <div className='roles'>
          <Link href={`${base_url}/roles`}>
            <a>Roles</a>
          </Link>
        </div>
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;