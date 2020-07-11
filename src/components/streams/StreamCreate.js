import StreamForm from './StreamForm'

import React from 'react'
import { connect } from 'react-redux'
import { createStream } from '../../actions/index'

class StreamCreate extends React.Component {




    //formValues(name can be any thing) comes from this.props.handleSubmit
    onSubmit = (formValues) => {
        this.props.createStream(formValues)

    }

    render() {
        return (
            <div>
                {/* customize the head */}
                <h3>Create a Stream</h3>
                {/* reuse the Form code */}
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}




export default connect(null, { createStream })(StreamCreate);