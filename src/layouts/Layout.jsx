
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      <main className="wrapper">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
