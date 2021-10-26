import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ScaryButtons from '../../components/Buttons/ScaryButtons';


const Scary = (props) => {
    //state to hold scaryData
    const [scaryData, setScaryData] = useState({
        noun: "",
        verb: "",
        adjective: "",
        number: "",
        created: false
    });

    //handleChange function for form
    const handleChange = (event) => {
        setScaryData({ ...scaryData, [event.target.name]: event.target.value });
    };


    //handle submit function for form
    const handleCreateSubmit = (event) => {
        event.preventDefault();
        props.createWords(scaryData);
        setScaryData({
            noun: "",
            verb: "",
            adjective: "",
            number: "",
            created: true
        });
    };

    // we need this to delete scary data
    const handleDeleteWords = async => {
        props.deleteWords(scaryData);
    };

    // loaded funct
    const loaded = () => {
        return props.words.map((word) => (
            <div key={word._id}>
                <p>
                    One dark and stormy night, there was a young boy named <span className='input'>{word.name}</span> who sat all alone in his <span className='input'>{word.adjective}</span> bedroom. Suddenly <span className='input'>{word.name}</span> heard <span className='input'>{word.number}</span> loud thumps and decided to <span className='input'>{word.verb}</span> under his blanket. When <span className='input'>{word.name}</span> decided to take a peek, 2 eerie looking doors stood shut at the end of the bed. Which door should <span className='input'>{word.name}</span> choose?
                </p>
                {/* <span className='input'>{word.name}</span>
                <span className='input'>{word.noun}</span>
                <span className='input'>{word.verb}</span>
                <span className='input'>{word.adjective}</span>
                <span className='input'>{word.number}</span> */}
            </div>
        ))
    }
    if (scaryData.created === false) {

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
                <ScaryButtons props={props} handleDeleteWords={handleDeleteWords}/>
            </div>
        )
    }
};

export default Scary;