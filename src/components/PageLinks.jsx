import { pageLinks } from '../../data'
const PageLinks = () => {
  return (
    <>
    {pageLinks.map(pageLink=>{
      return (
        <li key={pageLink.id}>
          <a href={pageLink.href}>{pageLink.text}</a>
        </li>
      );
    })}
    </>
  );
};

export default PageLinks