import { Link } from 'react-router-dom';

const Themes = () => {
    return (
        <div>
            <h1>Choose a theme</h1>
            <br />
            <Link to="/story">Code</Link><br />
            <br />
            <Link to="/fairytale">Fairytale</Link><br />
            <br />
            <Link to="/scary">Scary</Link>
        </div>
    );
};

export default Themes;