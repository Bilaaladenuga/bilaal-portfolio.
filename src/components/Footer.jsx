
import { Link } from 'react-router-dom';
import '../index.css';

const Footer = () => {
    return (
        <footer>
            <div className="top-footer">
                <p style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
                    <span>bilaal</span>
                    <span style={{ color: 'var(--indigo)', fontWeight: 800, fontSize: '1.4rem' }}>.</span>
                </p>
            </div>
            <div className="middle-footer">
                <ul className="footer-menu">
                    {[['/', 'Home'], ['/work', 'Work'], ['/journey', 'Journey'], ['/now', 'Now'], ['/contact', 'Contact']].map(([path, label]) => (
                        <li key={path} className="footer_menu_list">
                            <Link to={path}>{label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="footer-social-icons">
                <div className="icon">
                    <a href="https://www.instagram.com/adenugabilaal/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                        <i className="uil uil-instagram"></i>
                    </a>
                </div>
                <div className="icon">
                    <a href="https://ng.linkedin.com/in/adenuga-bilaal" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                        <i className="uil uil-linkedin-alt"></i>
                    </a>
                </div>
                <div className="icon">
                    <a href="https://github.com/Bilaaladenuga" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                        <i className="uil uil-github-alt"></i>
                    </a>
                </div>
            </div>
            <div className="bottom-footer">
                <p>Copyright © <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>BILAAL ADENUGA × MOBO DIGITAL</Link> — All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
