import { fetchStreams } from '../../actions/index'

import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class StreamList extends Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className='item' key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className='large middle aligned icon camera' />
                    <div className='content'>
                        {stream.title}
                        <div className='description'>{stream.description}</div>
                    </div>
                </div>
            )
        })
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to='/streams/new' className='ui button primary'>
                        Create Stream
                    </Link>
                </div>
            )
        }
    }

    renderAdmin(stream) {
        if (this.props.currentUserId === stream.userId) {
            return (
                <div className='right floated content'>
                    <button className='ui button green'>Edit</button>
                    <button className='ui button negative'>Delete</button>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className='ui celled list'>{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //All the different values inside of that object 
        //are going to be pulled out and then inserted into an array
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,//current User's id
        isSignedIn: state.auth.isSignedIn
    }
}


export default connect(mapStateToProps, {
    fetchStreams
})(StreamList);