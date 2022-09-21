import dynamic from 'next/dynamic';
import Link from 'next/link';
// import LetteredAvatar from 'react-lettered-avatar';
import { mainColor } from '../../generalStyledComponents/Pallete';
import { useSelector } from 'react-redux';
import StyledSidebar from './StyledSidebar';

const ProfilePictureWithLetters = dynamic(
  () => import('react-lettered-avatar'),
  { ssr: false }
);

const Sidebar = () => {

  const user = useSelector(state => state.user.user);


  console.log(user);

  const base_url = `/organizations/${user?.organization}`;
  return (
    <StyledSidebar>
      <div className='profile'>
        <div className='profile-picture' >
          <span>
            <ProfilePictureWithLetters
              name="Lettered Avatar"
              backgroundColor = {mainColor}
              size={35}
              radius={5}
            />
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