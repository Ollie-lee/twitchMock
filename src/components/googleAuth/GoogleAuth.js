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

    onAuthChange=()=>{
        this.setState({
            isSignedIn:this.auth.isSignedIn.get()
        })
    }

    renderAuthButton(){
        if(this.state.isSignedIn===null){
            return <div>I do not know if we are signed in</div>
        }else if (this.state.isSignedIn){
            return <div>I am signed in!</div>
        }else{
            return <div>I am not signed in...</div>
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