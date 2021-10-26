import { Link } from 'react-router-dom';
import { useState } from 'react';

const CodeOpt2 = (props) => {
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
            <h1>Red pill was the wrong option: You Died!💀</h1>
            <Link to='/themes'><button onClick={handleDeleteStory}>Back to themes</button></Link>
        </div>
    );
};

export default CodeOpt2;