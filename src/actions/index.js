import streams from '../apis/streams'
import { formValues } from 'redux-form'

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
    const response = await streams.post('/streams', formValues)//post a formValue to the server

    dispatch({
        type: 'CREATE_STREAM',
        payload: response.data,
    })
}

export const FETCH_STREAMS = 'FETCH_STREAMS';
export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams')

    dispatch({
        type: 'FETCH_STREAMS',
        payload: response.data
    })
}

export const FETCH_STREAM = 'FETCH_STREAM';
export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`)

    dispatch({
        type: 'FETCH_STREAM',
        payload: response.data
    })
}

export const EDIT_STREAM = 'EDIT_STREAM';
export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.put(`/streams/${id}`, formValues)

    dispatch({
        type: 'EDIT_STREAM',
        payload: response.data
    })
}

export const DELETE_STREAM = 'DELETE_STREAM';
export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`)

    dispatch({
        type: 'DELETE_STREAM',
        payload: id
    })
}