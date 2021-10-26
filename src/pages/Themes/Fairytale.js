import React, { useState } from "react";
import FTButtons from "../../components/Buttons/FTButtons";

const Fairytale = (props) => {
    //state to hold fairytaleData
    const [fairytaleData, setFairytaleData] = useState({
        noun: "",
        verb: "",
        adjective: "",
        number: "",
        created: false
    });

    //handleChange function for form
    const handleChange = (event) => {
        setFairytaleData({ ...fairytaleData, [event.target.name]: event.target.value });
    };


    //handle submit function for form
    const handleCreateSubmit = (event) => {
        event.preventDefault();
        props.createWords(fairytaleData);
        setFairytaleData({
            noun: "",
            verb: "",
            adjective: "",
            number: "",
            created: true
        });
    };

    // we need this to delete a fairytale
    const handleDeleteWords = async => {
        props.deleteWords(fairytaleData);
    };

    // loaded funct
    const loaded = () => {
        return props.words.map((word) => (
            <div key={word._id}>
                <p>
                    Once upon a time, there was a very <span className='input'>{word.adjective}</span> Princess named <span className='input'>{word.name}</span>. One day, she saw the King <span className='input'>{word.verb}</span> down from his thrown, and says to <span className='input'>{word.name}</span> that a prince has come to meet her and that she was <span className='input'>{word.number}</span> minutes to decide if she would like to meet him. Which route should <span className='input'>{word.name}</span> choose?
                </p>
                {/* <p>Fairytale Route</p>
                <span className='input'>{word.name}</span>
                <h1>{word.noun}</h1>
                <h1>{word.verb}</h1>
                <h1>{word.adjective}</h1>
                <h1>{word.number}</h1> */}
            </div>
        ))
    }
    if (fairytaleData.created === false) {

        return (
            <section>
                <form onSubmit={handleCreateSubmit}>
                    <input
                    type="text"
                    name="name"
                    placeholder="Type a NAME"
                    onChange={handleChange}
                    />
                    <br />
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
                <FTButtons props={props} handleDeleteWords={handleDeleteWords}/>
            </div>
        )
    }
};

export default Fairytale;