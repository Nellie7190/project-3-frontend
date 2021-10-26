import { Link } from 'react-router-dom';

const Header = (props) => {
    //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "10px",
    width: "100%",
    // margin: "auto",
    backgroundColor: "rgb(30, 181, 192)"
  };

  return (
    <header>
      <nav style={navStyle}>
        <Link to="/">
          <div>HOME</div>
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;