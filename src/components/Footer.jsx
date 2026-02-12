
import { Link } from 'react-router-dom';
import '../index.css';

const Footer = () => {
  return (
    <footer>
        <div className="top-footer">
            <p>Bilaal Adenuga .</p>
        </div>
        <div className="middle-footer">
            <ul className="footer-menu">
                <li className="footer_menu_list">
                    <Link to="/">Home</Link>
                </li>
                <li className="footer_menu_list">
                    <Link to="/work">Work</Link>
                </li>
                <li className="footer_menu_list">
                    <Link to="/journey">Journey</Link>
                </li>
                 <li className="footer_menu_list">
                    <Link to="/now">Now</Link>
                </li>
                <li className="footer_menu_list">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
        <div className="footer-social-icons">
            <div className="icon"><i className="uil uil-instagram"></i></div>
            <div className="icon"><i className="uil uil-linkedin-alt"></i></div>
            <div className="icon"><i className="uil uil-twitter"></i></div>
            <div className="icon"><i className="uil uil-github-alt"></i></div>
        </div>
        <div className="bottom-footer">
            <p>Copyright © <Link to="/" style={{textDecoration: 'none'}}>BILAAL ADENUGA X MOBO DIGITAL</Link> - All rights reserved
            </p>
        </div>
    </footer>
  );
};

export default Footer;
