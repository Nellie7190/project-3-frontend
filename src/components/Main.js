import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Story from "../pages/Themes/Story";
import CodeOpt1 from '../pages/RouteOptions/CodeOpt1'
import CodeOpt2 from '../pages/RouteOptions/CodeOpt2'
import FTOpt1 from '../pages/RouteOptions/FTOpt1.js';
import FTOpt2 from '../pages/RouteOptions/FTOpt2';
import ScaryOpt1 from "../pages/RouteOptions/ScaryOpt1";
import ScaryOpt2 from '../pages/RouteOptions/ScaryOpt2';
import About from "../pages/About";
import Home from "../pages/Home";
import Themes from "../pages/Themes";
import Fairytale from "../pages/Themes/Fairytale";
import Scary from "../pages/Themes/Scary";

const Main = (props) => {
    const [words, setWords] = useState(null);

    const URL = "https://project-3-backend-libs.herokuapp.com/";

    const getWords = async () => {
        const response = await fetch(`${URL}story`);
        const data = await response.json();
        setWords(data);
    };

    ///////// ADDED ATTEMPT
    const getFairyTaleWords = async () => {

        const response = await fetch(`${URL}fairytale`);
        const fairyTaleData = await response.json();
        setWords(fairyTaleData);
    }

    const getScaryWords = async () => {

        const response = await fetch(`${URL}scary`);
        const scaryData = await response.json();
        setWords(scaryData);
    }
////////////////////

    const createWords = async (word) => {
        // make post request to create words
        await fetch(`${URL}story`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(word),
        });
        /////////// ADDED ATTEMPT
        await fetch(`${URL}fairytale`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(word),
        });
        
        await fetch(`${URL}scary`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(word),
        });

        // update list of words
        getWords();
        getScaryWords();
        getFairyTaleWords();
    };
    
    // const createFairyTaleWords = async (word) => {
    //     await fetch(`${URL}fairytale`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "Application/json",
    //         },
    //         body: JSON.stringify(word),
    //     });
    //     //update list of fairytale words
    //     getFairyTaleWords();
    // }

    const deleteWords = async (word) => {
        // make post request to delete words
        await fetch(`${URL}story`, {
            method: "DELETE",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(word),
        });

        //////////// ADDED ATTEMPT
        await fetch(`${URL}fairytale`, {
            method: "DELETE",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(word),
        });

        await fetch(`${URL}scary`, {
            method: "DELETE",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(word),
        });
        // update list of words
        getWords();
        getFairyTaleWords();
        getScaryWords();
    };


    //[] <-- can write something in it you want to page to run if it changes, leave empty if you only want to run once
    // useEffect(() => getWords(), []);

    return (
        <main>
            <Switch>
                <Route
                    exact path="/"
                    render={(rp) => (
                        <Home
                            words={words}
                            deleteWords={deleteWords}
                            {...rp}
                        />
                    )}
                />
                <Route path="/about">
                    <About URL={URL} />
                </Route>
                <Route path="/themes">
                    <Themes URL={URL} />
                </Route>
                <Route exact path="/story">
                    <Story URL={URL} words={words} createWords={createWords} deleteWords={deleteWords} />
                </Route>
                <Route exact path="/fairytale">
                    <Fairytale URL={URL} words={words} createWords={createWords} deleteWords={deleteWords} />
                </Route>
                <Route exact path="/scary">
                    <Scary URL={URL} words={words} createWords={createWords} deleteWords={deleteWords} />
                </Route>
                <Route
                    path="/story/option1"
                    render={(rp) => (
                        <CodeOpt1
                            words={words}
                            deleteWords={deleteWords}
                            {...rp}
                        />
                    )}
                />
                <Route
                    path="/fairytale/option1"
                    render={(rp) => (
                        <FTOpt1
                            words={words}
                            deleteWords={deleteWords}
                            {...rp}
                        />
                    )}
                />
                <Route
                    path="/scary/option1"
                    render={(rp) => (
                        <ScaryOpt1
                            words={words}
                            deleteWords={deleteWords}
                            {...rp}
                        />
                    )}
                />
                <Route
                    path="/story/option2"
                    render={(rp) => (
                        <CodeOpt2
                            words={words}
                            deleteWords={deleteWords}
                            {...rp}
                        />
                    )}
                />
                <Route
                    path="/fairytale/option2"
                    render={(rp) => (
                        <FTOpt2
                            words={words}
                            deleteWords={deleteWords}
                            {...rp}
                        />
                    )}
                />
                <Route
                    path="/scary/option2"
                    render={(rp) => (
                        <ScaryOpt2
                            words={words}
                            deleteWords={deleteWords}
                            {...rp}
                        />
                    )}
                />
            </Switch>
        </main>
    );
};

export default Main;