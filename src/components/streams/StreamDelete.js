import history from '../../history'

import React from 'react'
import Modal from '../Modal'


const StreamDelete = () => {
    const actions = (
        <React.Fragment>
            <button className='ui red button'>Delete</button>
            <button className='ui button primary'>Cancel</button>
        </React.Fragment>
    )

    return (
        <div>
            StreamDelete
            <Modal
                title='Delete Stream'
                content='Are you sure you want to delete this stream?'
                //we want to pass in two buttons in to actions, which means we need to pass jsx
                actions={actions}
                onDismiss={() => history.push('/')}
            />
        </div>
    )
}

export default StreamDelete;