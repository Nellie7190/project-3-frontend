import { Link } from 'react-router-dom';

const FTButtons = (props) => {
    
    return (
        <div>
            <div>
            <br />
            <Link to='/fairytale/option1'><button class='Buttons' onClick={() => props.handleDeleteStory}>Meet Prince</button></Link>
            <Link to='/fairytale/option2'><button class='Buttons' onClick={() => props.handleDeleteStory}>Dont Meet Prince</button></Link>
            </div>
            <br />
            <Link to='/'><button class='Buttons' onClick={props.handleDeleteStory}>Start Over</button></Link>
        </div>
    );
};

export default FTButtons;