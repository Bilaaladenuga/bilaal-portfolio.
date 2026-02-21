
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import SplashScreen from '../components/SplashScreen';

const Layout = ({ children }) => {
  return (
    <>
      <SplashScreen />
      <ScrollProgress />
      <div className="container">
        <Navbar />
        <main className="wrapper">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
