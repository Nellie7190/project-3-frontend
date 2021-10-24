import { Link } from 'react-router-dom'
import { useState } from 'react';

const Home = (props) => {
    //state to hold storyData
    const [storyData, setStoryData] = useState({
        noun: "",
        verb: "",
        adjective: "",
        number: "",
        created: false
    });

    // we need this to delete a story
    const handleDeleteStory = async => {
        if (storyData.created === false) {
            props.deleteWords(storyData);
        }
    };
    return (
        <div>
            <h1>Welcome to Code-Libs!!! Press ENTER if you would like to see your fate</h1>
            <Link to="/story"> <button onClick={handleDeleteStory}>ENTER</button> </Link>
        </div>
    );
};

export default Home;