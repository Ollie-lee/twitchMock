import React from 'react'
import { Field, reduxForm, formValues } from 'redux-form'
import { connect } from 'react-redux'
import { createStream } from '../../actions/index'

class StreamCreate extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            )
        }
    }

    //use arrow ,or lose context
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete='off' />
                <div>{this.renderError(meta)}</div>
            </div>
        )
    }

    //formValues(name can be any thing) comes from this.props.handleSubmit
    onSubmit = (formValues) => {
        this.props.createStream(formValues)

    }

    render() {
        return (
            <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name='title' component={this.renderInput} label='Enter Title' />
                <Field name='description' component={this.renderInput} label='Enter Description' />
                <button className='ui button primary'>Submit</button>
            </form>
        )
    }
}

/*1.validate find formValues.xxx===Field.name
2.pass 'meta' property into handleSubmit*/

const validate = (formValues) => {
    //be invoked when first renderer and every interaction
    const errors = {};

    if (!formValues.title) {
        errors.title = 'please enter a title'
    }

    if (!formValues.description) {
        errors.description = 'please enter a description'
    }
    return errors
}

const formWrapper = reduxForm({
    form: 'streamCreate',
    validate,
})(StreamCreate)
export default connect(null, { createStream })(formWrapper);