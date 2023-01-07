import { useRouter } from 'next/router';
import { useEffect } from 'react';
import StyledDetailedProject from './StyledDetailedProject';

const DetailedProject = () => {

  const projectId = useRouter().asPath.split('/')[4];

  useEffect(() => {

  });

  return (
    <StyledDetailedProject>
      <h1>Proshecto</h1>
    </StyledDetailedProject>
  );
};

export default DetailedProject;