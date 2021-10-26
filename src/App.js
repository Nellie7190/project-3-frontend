import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import './Styles.scss'
import { Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className='HaF'>
        <Header />
      </div>
      <div className='Main'>
        <Main />
      </div>
      <div className='HaF' id='Footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
