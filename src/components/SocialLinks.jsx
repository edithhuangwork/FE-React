import { socialLinks } from "../../data";
const SocialLinks = () => {
  return (
    <>
    {socialLinks.map((socialLink)=> {
        return (
            <li key={socialLink.id}>
                <a href={socialLink.href} 
                target="_blank" 
                className="nav-icon"
                rel='noreferrer'>
                <i className={socialLink.icon}></i>
                </a>
            </li>
        );
    })}
    </>
  );
};

export default SocialLinks