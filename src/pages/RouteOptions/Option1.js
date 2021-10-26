import { Link } from 'react-router-dom';
import { useState } from 'react';

const Option1 = (props) => {
     //state to hold storyData
     const [storyData, setStoryData] = useState({
        noun: "",
        verb: "",
        adjective: "",
        number: "",
        created: false
    });

    // we need this to delete a story
    const handleDeleteStory = async => {
        if (storyData.created === false) {
            props.deleteWords(storyData);
        }
    };
    
    return (
        <div className='main-content'>
            <h1>Code Option 1: you Lived!</h1>
            <Link to='/themes'><button onClick={handleDeleteStory}>Back to themes</button></Link>
        </div>
    );
};

export default Option1;

//ATTEMPT MODAL POPUP
// const Option1 = () => {
//     const BUTTON_WRAPPER_STYLES = {
//         position: 'relative',
//         zIndex: 1
//     };

//     const OTHER_CONTENT_STYLES = {
//         position: 'relative',
//         zIndex: 2,
//         backgroundColor: 'red',
//         padding: '10px'
//     }
    
//     return (
//         <div style={BUTTON_WRAPPER_STYLES}>
//             <button>Open Modal</button>
//             <Modal>
//                 Option 1: you Lived!
//             </Modal>
//         </div>
//         <div  style={OTHER_CONTENT_STYLES}>Other Content</div>
//     );
// };

// export default Option1;