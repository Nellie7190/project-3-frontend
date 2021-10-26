import { Link } from 'react-router-dom';
import { useState } from 'react';

const ScaryOpt2 = (props) => {
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
        <div className='main-content'>
            <h1>🚪</h1>
            <br />
            <h1>You chose Door #2: You Died!💀</h1>
            <br />
            <Link to='/themes'><button onClick={handleDeleteStory}>Back to themes</button></Link>
        </div>
    );
};

export default ScaryOpt2;