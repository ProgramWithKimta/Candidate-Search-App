import { Link, useLocation } from 'react-router-dom';

  // TODO: Add necessary code to display the navigation bar and link between the pages
const Nav = () => {
  const currentPage = useLocation().pathname;

  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            Candidate Search
          </Link>
        </li>
        <li>
          <Link
            to="/saved"
              className={
                currentPage === '/saved' ? 'nav-link active' : 'nav-link'}
          >
            Saved Candidates
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
