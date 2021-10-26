import { Link } from 'react-router-dom';

const Themes = () => {
    return (
        <div>
            <h1>Choose a theme</h1>
            <Link to="/story">Code</Link><br />
            <Link to="/fairytale">Fairytale</Link><br />
            <Link to="/scary">Scary</Link>
        </div>
    );
};

export default Themes;