import { useState } from "react";
import { Link } from 'react-router-dom';


const StoryForm = (props) => {
    //state to hold storyData
    const [ storyData, setStoryData ] = useState({
        noun: "",
        verb: "",
        adjective: "",
        number: "",
    });

    
    //function to make api call for ABOUT data
    const getAboutData = async () => {
        //make api call and get response
        const response = await fetch(props.URL + 'story');
        //turn response into JS object
        const data = await response.json();
        //set the about state to data
        setStoryData(data);
    };

    //handleChange function for form
    const handleChange = (event) => {
        setStoryData({ ...storyData, [event.target.name] : event.target.value });

    };

    //handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('this is the beginning of handleSubmit')
        props.createWords(storyData);
        setStoryData({
            noun: "",
            verb: "",
            adjective: "",
            number: ""
        });
    };

    // loaded funct
    const loaded = () => {
        return props.words.map((word) => (
            <div key={word._id}>
                <h1>{word.noun}</h1>
                <h1>{word.verb}</h1>
                <h1>{word.adjective}</h1>
                <h1>{word.number}</h1>
            </div>
        ))
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="noun"
                placeholder="Type a NOUN"
                value={storyData.noun}
                onChange={handleChange}
                /><br />
                <input 
                type="text" 
                name="verb"
                placeholder="Type a VERB"
                value={storyData.verb}
                onChange={handleChange}
                /><br />
                <input 
                type="text" 
                name="adjective"
                placeholder="Type a ADJECTIVE"
                value={storyData.adjective}
                onChange={handleChange}
                /><br />
                <input 
                type="text" 
                name="number"
                placeholder="Type a NUMBER"
                value={storyData.number}
                onChange={handleChange}
                /> <br />
                <input type="submit" value="Create Story" />
            </form>
            {props.words ? loaded() : <h1>Loading...</h1>}
        </section>
    );
};

export default StoryForm;