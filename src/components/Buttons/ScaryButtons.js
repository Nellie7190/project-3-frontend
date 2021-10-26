import { Link } from 'react-router-dom';

const ScaryButtons = (props) => {
    
    return (
        <div>
            <div>
            <Link to='/scary/option1'><button class='Buttons' onClick={() => props.handleDeleteStory}>Door # 1</button></Link>
            <Link to='/scary/option2'><button class='Buttons' onClick={() => props.handleDeleteStory}>Door # 2</button></Link>
            </div>
            <Link to='/'><button class='Buttons' onClick={props.handleDeleteStory}>Start Over</button></Link>
        </div>
    );
};

export default ScaryButtons;