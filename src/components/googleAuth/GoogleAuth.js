import React from 'react'

class GoogleAuth extends React.Component {
    state = { isSignedIn: null }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            //be called after this client or to library has been successfully loaded up
            window.gapi.client.init({
                clientId: '1019790119293-u7d4kalah37o4auqnt62ik9a1m10r169.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                //init() return a promise,This aero function is going to be automatically invoked after a library has successfully initialized 
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
                //the callback in listen() will be invoked when the signedIn status changed
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        });
    }

    onAuthChange = () => {
        this.setState({
            isSignedIn: this.auth.isSignedIn.get()
        })
    }

    onSignInClick = ()=>{
        this.auth.signIn();
    }

    onSignOutClick = ()=>{
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className='ui google red button'>
                    <i className='google icon' />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignInClick} className='ui blue google button'>
                    <i className='google icon' />
                    Sign In with Google
                </button>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

export default GoogleAuth;