import React, { useState } from "react";
import Buttons from "../components/Buttons";
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
                <h1>{word.noun}</h1>
                <h1>{word.verb}</h1>
                <h1>{word.adjective}</h1>
                <h1>{word.number}</h1>
                <Link to='/'><button onClick={handleDeleteStory}>Start Over</button></Link>
            </div>
        ))
    }
    if (storyData.created === false) {

        return (
            <section>
                <form onSubmit={handleCreateSubmit}>
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
            <div>
                {props.words ? loaded() : <h1>Loading...</h1>}
                <Buttons props={props} handleDeleteStory={handleDeleteStory}/>
            </div>
        )
    }
};

export default Story;