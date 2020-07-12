import React from 'react'
//normally, we import this in our 
//root component file
import ReactDOM from 'react-dom'



const Modal = props => {
    return ReactDOM.createPortal(
        //two arguments:
        //1. some block of jsx
        //! the outer gray background
        <div onClick={props.onDismiss} className='ui dimmer modals visible active'>
            <div onClick={(e) => e.stopPropagation()} className='ui standard modal visible active'>
                {/* content */}
                <div className='header'>{props.title}</div>
                <div className='content'>
                    {props.content}
                </div>
                <div className='actions'>
                    {props.actions}
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