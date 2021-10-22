import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Story from "../pages/Story";
import Option1 from "../pages/Option1";
import Option2 from "../pages/Option2";

const Main = (props) => {
    const [ words, setWords ] = useState(null);

    const URL = "https://express-react-cheese-build1.herokuapp.com/";
  
    const getWords = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setWords(data);
    };
  
    const createWords = async (word) => {
      // make post request to create words
      await fetch(URL, {
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
      await fetch(URL, {
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
                {/* <Route exact path="/">
          <Home/>
        </Route> */}
                <Route path="/story">
                    <Story words={words} createWords={createWords}/>
                </Route>
                <Route
                    path="/story/:id"
                    render={(rp) => (
                        <Option1
                        words={words}
                        deleteWords={deleteWords}
                            {...rp}
                        />
                    )}
                />
                <Route
                    path="/story/:id"
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