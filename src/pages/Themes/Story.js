import React, { useState } from "react";
import CodeButtons from "../../components/Buttons/CodeButtons";
import { Link } from 'react-router-dom';

const Story = (props) => {
    //state to hold storyData
    const [storyData, setStoryData] = useState({
        noun: "",
        verb: "",
        adjective: "",
        number: "",
        created: false
    });

    //handleChange function for form
    const handleChange = (event) => {
        setStoryData({ ...storyData, [event.target.name]: event.target.value });
    };


    //handle submit function for form
    const handleCreateSubmit = (event) => {
        event.preventDefault();
        props.createWords(storyData);
        setStoryData({
            noun: "",
            verb: "",
            adjective: "",
            number: "",
            created: true
        });
    };

    // we need this to delete a story
    const handleDeleteStory = async => {
        props.deleteWords(storyData);
    };

    // loaded funct
    const loaded = () => {
        return props.words.map((word) => (
            <div key={word._id}>
                <p>This is the story of a <span class='input'>{word.noun}</span> named <span class='input'>{word.name}</span>who decided to try learning Java Script. Little did <span class='input'>{word.name}</span> know, things became <span class='input'>{word.adjective}</span> very fast. <span class='input'>{word.name}</span> decided to <span class='input'>{word.verb}</span> for <span class='input'>{word.number}</span> minutes. When returning, the <span class='input'>{word.name}</span> realized something was missing in the code. Which route should be taken?</p>
            </div>
        ))
    }
    if (storyData.created === false) {

        return (
            <section>
                <form onSubmit={handleCreateSubmit}>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Type a NAME"
                        onChange={handleChange}
                    /><br />
                    <input
                        type="text"
                        name="noun"
                        placeholder="Type a NOUN"
                        onChange={handleChange}
                    /><br />
                    <input
                        type="text"
                        name="verb"
                        placeholder="Type a VERB"
                        onChange={handleChange}
                    /><br />
                    <input
                        type="text"
                        name="adjective"
                        placeholder="Type a ADJECTIVE"
                        onChange={handleChange}
                    /><br />
                    <input
                        type="text"
                        name="number"
                        placeholder="Type a NUMBER"
                        onChange={handleChange}
                    /> <br />
                    <input
                        type="hidden"
                        name="created"
                        onChange={handleChange}
                        value={true}
                    />
                    <input type="submit" value="Create Story" />
                </form>
            </section>

        )

    } else {

        return (
            <div className='main-content'>
                {props.words ? loaded() : <h1>Loading...</h1>}
                <CodeButtons props={props} handleDeleteStory={handleDeleteStory}/>
            </div>
        )
    }
};

export default Story;