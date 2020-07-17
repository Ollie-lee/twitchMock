import { fetchStream, editStream } from '../../actions/index'
import StreamForm from './StreamForm'

import React from 'react'
import { connect } from 'react-redux'
import { formValues } from 'redux-form'
import _ from 'lodash'

class StreamEdit extends React.Component {
    componentDidMount() {
        //if we refresh the page. we will lose <StreamList /> data
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues)
    }

    render() {
        //first time this.props.stream is undefined
        //! which will cause error
        //after componentDidMount(), the stream data will show 
        //* -> conditional rendering
        return (
            <div>
                <h3>StreamEdit</h3>
                {/* initial value should be inserted into Form */}
                <StreamForm
                    // title method should be equal to the 'name' property in <Field />
                    //same as {title:xxxx}
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }


}

const mapStateToProps = (state, ownProps) => {
    return {
        //<Router /> pass a bunch of props to StreamEdit(direct child component)
        //id is the current id of addressbar, plus the streams structure's key is the id
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {
    fetchStream,
    editStream
})(StreamEdit);