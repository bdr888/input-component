import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// Field is a component, linked to reduxForm, built in action creators to handle form events, but needs a function to help it render
// reduxForm is a function very similar to "connect" from react-redux - links our component to redux store
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { createPost } from '../actions'; this needs to be what happens when click 'Register'

class Input extends Component {
  renderForm(field) {
    const { meta: { touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
      <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Your Email Address"
          name="email"
          component={this.renderForm}
          />
        <Field
          label="Enter a Password  (4-30 characters)"
          name="password"
          component={this.renderForm}
          />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  // validate inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title!"
  }
  if (!values.categories) {
    errors.categories = "Enter some categories!"
  }
  if (!values.content) {
    errors.content = "Enter content!"
  }
  // if errors obj is empty, the form is ok to submit
  // if errors obj has any properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'InputForm'
})(Input);
