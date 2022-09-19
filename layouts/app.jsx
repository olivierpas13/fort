import Sidebar from '../components/Sidebar/Sidebar';

const AppLayout = ({ children }) => {
  return (
    <>
      <Sidebar/>
      {children}
    </>
  );
};

export default AppLayout;