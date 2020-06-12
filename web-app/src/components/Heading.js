import React from 'react';

const Heading = (props) => {
    return ( 
        <div className='top'>
            <div className='header'>
                <h1 className='title'>The Ladder</h1>
            </div>
            <div className='description'>
                <h4 className='instructions'>Enter text into the boxes.</h4>
                <h4 className='drag'>Drag and drop the boxes to re-order the 
                ladder.</h4>
                <h4 className='rung'>Click the "Add Rung" button to add more 
                slots on your ladder.</h4>
            </div>
            <div className='btn'>
                <button onClick={() => console.log('clicked')}>Add Rung</button>
            </div>
        </div>
     );
}
 
export default Heading;