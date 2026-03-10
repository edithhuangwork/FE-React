import { pageLinks } from '../../data'
const PageLinks = ({ closeNavbar }) => {
  return (
    <>
    {pageLinks.map(pageLink=>{
      return (
        <li key={pageLink.id}>
          <a href={pageLink.href} onClick={closeNavbar}>{pageLink.text}</a>
        </li>
      );
    })}
    </>
  );
};

export default PageLinks