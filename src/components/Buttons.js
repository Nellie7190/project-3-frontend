import { Link } from 'react-router-dom';

const Buttons = (props) => {
    
    return (
        <div>
            <Link to='/story/option1'><button onClick={() => props.handleDeleteStory}>ChooseOption 1</button></Link>
            <Link to='/story/option2'><button onClick={() => props.handleDeleteStory}>ChooseOption 2</button></Link>
        </div>
    );
};

export default Buttons;