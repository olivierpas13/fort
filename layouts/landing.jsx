import Navbar from '../components/Navbar/Navbar';

const Landing = ({ children }) => {
  return (
    <>
      <Navbar/>
      <main>
        {children}
      </main>
    </>
  );
};

export default Landing;