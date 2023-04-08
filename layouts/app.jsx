import { useState } from 'react';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import Drawer from '@mui/material/Drawer';

import Sidebar from '../components/Sidebar/Sidebar';
import AppPage from './styledApp';
import DrawerSidebar from 'components/Sidebar/DrawerSidebar';

const AppLayout = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);


  return (
    <AppPage
    >
      <div className="page-header">
        <button className="sidebar-toggle"
          onClick={() => {setIsSidebarVisible(true);}}
        >
          <FiMenu />
        </button>
        <Drawer
          anchor="left"
          open={isSidebarVisible}
          onClose={() => {setIsSidebarVisible(false);}}
        >
          {
            <DrawerSidebar setIsSidebarVisible={setIsSidebarVisible} />
          }
        </Drawer>
        <span>FORT</span>
      </div>
      <div className={isSidebarVisible ? 'sidebar-wrapper active' : 'sidebar-wrapper'}>
        <Sidebar />
      </div>
      <div className="page-content">{children}</div>
    </AppPage>
  );
};

export default AppLayout;




// import Sidebar from '../components/Sidebar/Sidebar';
// import AppPage from './styledApp';

// const AppLayout = ({ children }) => {
//   return (
//     <AppPage>
//       <Sidebar className='sidebar' />
//       <div className='page-content'>
//         {children}
//       </div>
//     </AppPage>
//   );
// };

// export default AppLayout;