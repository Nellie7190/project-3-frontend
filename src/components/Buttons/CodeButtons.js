import { Link } from 'react-router-dom';

const CodeButtons = (props) => {
    
    return (
        <div>
            <div>
            <Link to='/story/option1'><button class='Buttons' onClick={() => props.handleDeleteStory}>ChooseOption 1</button></Link>
            <Link to='/story/option2'><button class='Buttons' onClick={() => props.handleDeleteStory}>ChooseOption 2</button></Link>
            </div>
            <Link to='/'><button class='Buttons' onClick={props.handleDeleteStory}>Start Over</button></Link>
        </div>
    );
};

export default CodeButtons;