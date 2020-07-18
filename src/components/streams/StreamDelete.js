import { connect } from 'react-redux'
import React from 'react'
import Modal from '../Modal'
import { Link } from 'react-router-dom'

import history from '../../history'
import {
    fetchStream,
    deleteStream,
} from '../../actions'



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
        const id = this.props.match.params.id
        return (
            <React.Fragment>
                {/* not use this.props.deleteStream(id), because we can not pass id,
                if used method above, this callback would be instantly called */}
                <button onClick={() => this.props.deleteStream(id)} className='ui red button'>Delete</button>
                <Link to='/' className='ui button primary'>Cancel</Link>
            </React.Fragment>
        )
    }

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure to delete this stream?'
        }

        return `Are you sure to delete the stream with title: ${this.props.stream.title}?`
    }

    render() {
        return (
            <div>
                {/* StreamDelete */}
                <Modal
                    title='Delete Stream'
                    content={this.renderContent()}
                    //we want to pass in two buttons in to actions, which means we need to pass jsx

                    //we need () to call the result, we are not passing a reference
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    //use ownProps to access //! this.props.match.params.id
    return {
        stream: state.streams[ownProps.match.params.id]
    }

}

export default connect(mapStateToProps, {
    fetchStream,
    deleteStream
})(StreamDelete);