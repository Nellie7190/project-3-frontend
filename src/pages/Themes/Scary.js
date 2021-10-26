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
                <p>Scary Route</p>
                <h1>{word.name}</h1>
                <h1>{word.noun}</h1>
                <h1>{word.verb}</h1>
                <h1>{word.adjective}</h1>
                <h1>{word.number}</h1>
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