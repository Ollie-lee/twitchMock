import { fetchStream, editStream } from '../../actions/index'
import StreamForm from './StreamForm'

import React from 'react'
import { connect } from 'react-redux'
import { formValues } from 'redux-form'

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        console.log(formValues)
    }

    render() {
        //first time this.props.stream is undefined
        //after componentDidMount(), the stream data will show
        return (
            <div>
                <h3>StreamEdit</h3>
                {/* initial value should be inserted into Form */}
                <StreamForm
                    // title method should be equal to the 'name' property in <Field />
                    initialValues={this.props.stream}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }


}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {
    fetchStream,
    editStream
})(StreamEdit);