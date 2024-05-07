import { Link } from 'react-router-dom';
import { capitalizeFirstLetter  } from '../../utils/helper.js'

function Nav({ currentPage }) {
  const pages = ['portfolio', 'resume', 'contact'];
  
  return (
    <nav className="navbar "> 
      <ul >
        <li
          className={`mx-5 ${currentPage === '/' && 'navActive'}`}
          key="about"
        > 
          <Link to="/">About</Link>
        </li>
        {pages.map((Page) => (
          <li
            className={`mx-5 ${currentPage === `/${Page}` && 'navActive'}`}
            key={Page}
          >
            <Link to={`/${Page}`}>{capitalizeFirstLetter(Page)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
