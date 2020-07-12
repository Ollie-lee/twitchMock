import React from 'react'
//normally, we import this in our 
//root component file
import ReactDOM from 'react-dom'

import history from '../history'

const Modal = props => {
    return ReactDOM.createPortal(
        //two arguments:
        //1. some block of jsx
        //! the outer gray background
        <div onClick={() => history.push('./')} className='ui dimmer modals visible active'>
            <div onClick={(e) => e.stopPropagation()} className='ui standard modal visible active'>
                {/* content */}
                <div className='header'>Delete Stream</div>
                <div className='content'>
                    Are you sure you want to delete this stream?
                </div>
                <div className='actions'>
                    <button className='ui red button'>Delete</button>
                    <button className='ui button primary'>Cancel</button>
                </div>
            </div>
        </div>,
        //2. a reference to the element 
        //that I want to render this portal into.
        //but not directly attach to #id in the body, or it will replace everything
        //so we create other elements in index.html with different id
        document.querySelector('#modal')
    )
}

export default Modal