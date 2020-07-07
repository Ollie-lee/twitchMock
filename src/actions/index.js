import streams from '../../apis/streams'

export const SIGN_IN = 'SIGN_IN'
export const signIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload: userId
    }
}

export const SIGN_OUT = 'SIGN_OUT'
export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const CREATE_STREAM = 'CREATE_STREAM'
export const createStream = formValues => async dispatch => {
    streams.post('/streams', formValues)
}