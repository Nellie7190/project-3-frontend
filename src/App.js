import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Main from './components/Main';
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact render={()=> <Home />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
