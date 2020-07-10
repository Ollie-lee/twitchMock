import { fetchStream } from '../../actions/index'

import React from 'react'
import { connect } from 'react-redux'

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    render() {
        //first time this.props.stream is undefined
        //after componentDidMount(), the stream data will show
        
        console.log(this.props)
        return (
            <div>
                StreamEdit
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
    fetchStream
})(StreamEdit);