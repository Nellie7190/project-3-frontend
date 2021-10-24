import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Story from "../pages/Story";
import Option1 from "../pages/Option1";
import Option2 from "../pages/Option2";
import About from "../pages/About";
import Home from "../pages/Home";

const Main = (props) => {
    const [words, setWords] = useState(null);

    const URL = "https://project-3-backend-libs.herokuapp.com/";

    const getWords = async () => {
        const response = await fetch(`${URL}story`);
        const data = await response.json();
        setWords(data);
        console.log(data)
    };

    const createWords = async (word) => {
        // make post request to create words
        await fetch(`${URL}story`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(word),
        });
        // update list of words
        getWords();
    };

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


    //[] <-- can write something in it you want to page to run if it changes, leave empty if you only want to run once
    useEffect(() => getWords(), []);

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
                <Route exact path="/story">
                    <Story URL={URL} words={words} createWords={createWords} deleteWords={deleteWords} />
                </Route>
                <Route
                    path="/story/option1"
                    render={(rp) => (
                        <Option1
                            words={words}
                            deleteWords={deleteWords}
                            {...rp}
                        />
                    )}
                />
                <Route
                    path="/story/option2"
                    render={(rp) => (
                        <Option2
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