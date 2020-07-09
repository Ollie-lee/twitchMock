import { fetchStreams } from '../../actions/index'

import { connect } from 'react-redux'
import React, { Component } from 'react'

export class StreamList extends Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className='item' key={stream.id}>
                    <i className='large middle aligned icon camera' />
                    <div className='content'>
                        {stream.title}
                        <div className='description'>{stream.description}</div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className='ui celled list'>{this.renderList()}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //All the different values inside of that object 
        //are going to be pulled out and then inserted into an array
        streams: Object.values(state.streams),
    }
}


export default connect(mapStateToProps, {
    fetchStreams
})(StreamList);