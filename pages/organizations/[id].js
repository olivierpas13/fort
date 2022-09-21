import { useRouter } from 'next/router';
import Sidebar from '../../components/Sidebar/Sidebar';

const Organization = () => {

  const router = useRouter();

  console.log(router);

  return (
    <Sidebar>
      <h1>{router.asPath}</h1>
    </Sidebar>
  );
};

export default Organization;