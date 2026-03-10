import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';
import logo from '../assets/logo.png';
import { useState} from 'react';

const Navbar = () => {
    const [isToggled, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!isToggled);
    };
    //========================
    
    const closeNavbar = () => {
        setToggle(false);
    };
    //========================

    return (
    <nav className="navbar">
        <div className="container navbar-flex">
            <a href="#home" className="logo">
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
                <div className="mobile-menu-toggle" onClick={handleToggle}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            <div className={`mobile-menu-items ${isToggled?"active": ""}`} >
                <ul className="mobile-menu-list">
                    <PageLinks closeNavbar={closeNavbar} />
                </ul>
            </div>
            </div>
        </div>
    </nav>
    );
};

export default Navbar