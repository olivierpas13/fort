import Sidebar from '../components/Sidebar/Sidebar';
import AppPage from './styledApp';

const AppLayout = ({ children }) => {
  return (
    <AppPage>
      <Sidebar/>
      <div className='page-content'>
        {children}
      </div>
    </AppPage>
  );
};

export default AppLayout;