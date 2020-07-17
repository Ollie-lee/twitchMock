import streams from '../apis/streams'
import history from '../history'

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
export const createStream = formValues => async (dispatch, getState) => {
    //use getState to pull out data in the store
    const { userId } = getState().auth;
    const response = await streams.post('/streams', { ...formValues, userId })//post a formValue to the server

    dispatch({
        type: 'CREATE_STREAM',
        payload: response.data,
    })

    //do some programmatic navigation to 
    //get the user back to the root route
    history.push('/')//go to the root
}

export const FETCH_STREAMS = 'FETCH_STREAMS';
export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams')
    console.log("response.data", response.data)
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
console.log("formValues", formValues)
    //formvalues should only include title+description(changed property)
    //use put here may lose some property
    const response = await streams.patch(`/streams/${id}`, formValues)

    dispatch({
        type: 'EDIT_STREAM',
        payload: response.data
    })
    history.push('/')
}

export const DELETE_STREAM = 'DELETE_STREAM';
export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`)

    dispatch({
        type: 'DELETE_STREAM',
        payload: id
    })

    history.push('/')
}