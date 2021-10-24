import { Link } from 'react-router-dom';
import { useState } from 'react';

const Buttons = (props) => {
    const [words, setWords] = useState(null);

    const URL = "https://project-3-backend-libs.herokuapp.com/";

    const getWords = async () => {
        const response = await fetch(`${URL}story`);
        const data = await response.json();
        setWords(data);
        console.log(data)
    };
    //state to hold storyData
    const [storyData, setStoryData] = useState({
        noun: "",
        verb: "",
        adjective: "",
        number: "",
        created: false
    });

    const deleteWords = async (word) => {
        // make post request to delete words
        await fetch(`${URL}story`, {
            method: "DELETE",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(word),
        });
        // update list of words
        getWords();
    };

    // we need this to delete a story
    const handleDeleteStory = async => {
        deleteWords(storyData);
    };

    return (
        <div>
            <Link to='/story/option1'><button onClick={handleDeleteStory}>ChooseOption 1</button></Link>
            <Link to='/story/option2'><button onClick={handleDeleteStory}>ChooseOption 2</button></Link>
        </div>
    );
};

export default Buttons;