import { Link } from 'react-router-dom';
import { useState } from 'react';

const FTOpt1 = (props) => {
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
            <h1>You choose to meet the Prince: They fall in love and live Happily Ever After!👑</h1>
            <Link to='/themes'><button onClick={handleDeleteStory}>Back to themes</button></Link>
        </div>
    );
};

export default FTOpt1;
