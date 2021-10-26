import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <nav>
        <Link to="/">
          <div>HOME</div>
        </Link>
        <h4>Code-Libs</h4>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;