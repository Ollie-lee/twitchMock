import history from '../../history'
import { fetchStream } from '../../actions'

import { connect } from 'react-redux'
import React from 'react'
import Modal from '../Modal'


class StreamDelete extends React.Component {
    // const actions = (
    //     <React.Fragment>
    //         <button className='ui red button'>Delete</button>
    //         <button className='ui button primary'>Cancel</button>
    //     </React.Fragment>
    // )

    componentDidMount() {
        //! id in the address bar:this.props.match.params.id
        this.props.fetchStream(this.props.match.params.id)
    }

    renderActions = () => {
        return (
            <React.Fragment>
                <button className='ui red button'>Delete</button>
                <button className='ui button primary'>Cancel</button>
            </React.Fragment>
        )
    }

    render() {
        return (
            <div>
                StreamDelete
                <Modal
                    title='Delete Stream'
                    content='Are you sure you want to delete this stream?'
                    //we want to pass in two buttons in to actions, which means we need to pass jsx

                    //we need () to call the result, we are not passing a reference
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        )
    }
}

export default connect(null, {
    fetchStream
})(StreamDelete);