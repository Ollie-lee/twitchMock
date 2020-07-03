import React from 'react'

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            //be called after this client or to library has been successfully loaded up
            window.gapi.client.init({
                clientId: '1019790119293-u7d4kalah37o4auqnt62ik9a1m10r169.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }
    render() {
        return (
            <div>
                Google Auth
            </div>
        )
    }
}

export default GoogleAuth;