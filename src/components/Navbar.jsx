import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="container navbar-flex">
            <a href="./index.html" className="logo">
                <img src={logo} alt="" className="logo" /></a>
            <div className="main-menu">
                <ul className="main-menu-list">
                    <PageLinks />
                </ul>
                <ul className="main-menu-icons">
                    <SocialLinks />
                </ul>
            </div>
            <div className="mobile-menu">
                <div className="mobile-menu-toggle">
                    <i className="fa-solid fa-bars"></i>
                </div>
            <div className="mobile-menu-items">
                <ul className="mobile-menu-list">
                    <PageLinks />
                </ul>
            </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar