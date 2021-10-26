import { Link } from 'react-router-dom';

const Themes = () => {
    return (
        <div>
            <h1>This is my themes pages</h1>
            <Link to="/story"> <button>Code</button> </Link>
            {/* <Link to="/fairytale"><button>Fairytale</button></Link>
            <Link to="/scary"><button>Scary</button></Link> */}
        </div>
    );
};

export default Themes;