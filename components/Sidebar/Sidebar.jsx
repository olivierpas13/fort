import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Avatar from '@mui/material/Avatar';

import { mainColor } from '../../generalStyledComponents/Pallete';
import getInitials from 'utils/getInitials';
import StyledSidebar from './StyledSidebar';
import Invitation from 'components/Invitation/Invitation';
import { BasicButton } from 'generalStyledComponents/Button';

const Sidebar = () => {

  const { data: session } = useSession();

  const [modalVisibility, setModalVisibility] = useState(false);

  const router = useRouter();

  if(session){
    const { user } = session;
    const baseUrl = `/organizations/${user.organization}`;
    const userName= getInitials(user?.name);

    return (
      <>
        {
          modalVisibility && <Invitation role={user.role} handleClose={setModalVisibility} />
        }

        <StyledSidebar>
          <div className='profile'>
            <div className='profile-picture' >
              <Avatar
                sx={{ bgcolor: mainColor }}
                variant="rounded"
              >
                {userName}
              </Avatar>
            </div>
            <div className="profile-credentials">
              <p>{user.organization}</p>
              <p>{user.name}</p>
            </div>
          </div>
          {/* Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
          <div className='pages'>
            <div className='dashboard'>
              <Link href={`${baseUrl}/dashboard`}>
                <a>
                  <svg fill='#ccc' width='35' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z"/></svg>
              Dashboard
                </a>
              </Link>
            </div>
            { user?.role === 'administrator'?
              <div className='projects'>
                <Link href={`${baseUrl}/projects`}>
                  <a>
                    <svg fill='#ccc' width='35' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z"/></svg>
                Projects
                  </a>
                </Link>
              </div>
              :
              user?.project && <div className='project'>
                <Link href={`${baseUrl}/project`}>
                  <a>
                    <svg fill='#ccc' width='35' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z"/></svg>
              Projects
                  </a>
                </Link>
              </div>
            }
            <div className='issues'>
              <Link href={`${baseUrl}/issues`}>
                <a>
                  <svg fill='#ccc' width='35' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"/></svg>
                Issues
                </a>
              </Link>
            </div>
            {(session?.user?.role === 'administrator' || session?.user?.role === 'project-manager') &&
             <div className='roles'>
               <Link href={`${baseUrl}/roles`}>
                 <a>
                   <svg fill='#ccc' width='35' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H392.6c-5.4-9.4-8.6-20.3-8.6-32V352c0-2.1 .1-4.2 .3-6.3c-31-26-71-41.7-114.6-41.7H178.3zM528 240c17.7 0 32 14.3 32 32v48H496V272c0-17.7 14.3-32 32-32zm-80 32v48c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32V272c0-44.2-35.8-80-80-80s-80 35.8-80 80z"/></svg>
                Roles
                 </a>
               </Link>
             </div>}
            { (user.role === 'administrator' || user.role === 'project-manager') && <div className='invitation' >
              {!modalVisibility && <BasicButton onClick={() => {setModalVisibility(true);}}>
              Invite a new member
              </BasicButton>
              }
            </div>}
          </div>
        </StyledSidebar>
      </>

    );

  }
};

export default Sidebar;