
import { Link } from 'react-router-dom';
import '../index.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-brand">
                bilaal<span>.</span>
            </div>
            <div className="footer-nav">
                {[['/', 'Home'], ['/work', 'Work'], ['/journey', 'Journey'], ['/now', 'Now'], ['/contact', 'Contact']].map(([path, label]) => (
                    <Link key={path} to={path}>{label}</Link>
                ))}
            </div>
            <div className="footer-socials">
                <a href="https://www.instagram.com/adenugabilaal/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                    <i className="uil uil-instagram"></i>
                </a>
                <a href="https://ng.linkedin.com/in/adenuga-bilaal" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                    <i className="uil uil-linkedin-alt"></i>
                </a>
                <a href="https://github.com/Bilaaladenuga" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                    <i className="uil uil-github-alt"></i>
                </a>
            </div>
            <div className="footer-copy">
                <p>© 2026 Bilaal Adenuga × MOBO Digital — All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
