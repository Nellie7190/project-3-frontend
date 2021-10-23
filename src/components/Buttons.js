import { Link } from 'react-router-dom';

const Buttons = () => {
    return (
        <div>
            <Link to='/option1'><button>ChooseOption 1</button></Link>
            <Link to='/option2'><button>ChooseOption 2</button></Link>
        </div>
    );
};

export default Buttons;