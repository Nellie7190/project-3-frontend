import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Welcome to Code-Libs!!! Press ENTER if you would like to see your fate</h1>
            <Link to="/story"> ENTER </Link>
        </div>
    );
};

export default Home;