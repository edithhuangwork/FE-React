import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="section footer">
        <ul className="footer-menu-list">
            <PageLinks />
        </ul>
        <ul className="footer-menu-icons">
            <SocialLinks />
        </ul>
        <p>Copyright &copy; travel tours company <span id="date">{new Date().getFullYear()}</span> all right reserved
        </p>
    </footer>
  );
};

export default Footer