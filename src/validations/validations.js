import validator from 'validator';
import React, { Component } from 'react'


export const required = (value) => {
  if (!value.toString().trim().length) {
    return <span className="error alert alert-danger">Required!</span>
  }
};

export const maxLength = (value, maxLength) => {
    if (value.toString().trim().length > maxLength) {
      return <span className="error alert alert-danger">The value exceeded max length {maxLength}.</span>
    }
};

export const minLength = (value, minLength) => {
    if (value.toString().trim().length < minLength) {
      return <span className="error alert alert-danger">Minimum length should be {minLength}.</span>
    }
  };
 
export const email = (value) => {
  if (!validator.isEmail(value)) {
    return `${value} is not a valid email.`
  }
};
 
const lt = (value, props) => {
  // get the maxLength from component's props
  if (!value.toString().trim().length > props.maxLength) {
    // Return jsx
    return <span className="error">The value exceeded {props.maxLength} symbols.</span>
  }
};
 
const password = (value, props, components) => {
  // NOTE: Tricky place. The 'value' argument is always current component's value.
  // So in case we're 'changing' let's say 'password' component - we'll compare it's value with 'confirm' value.
  // But if we're changing 'confirm' component - the condition will always be true
  // If we need to always compare own values - replace 'value' with components.password[0].value and make some magic with error rendering.
  if (value !== components['confirm'][0].value) { // components['password'][0].value !== components['confirm'][0].value
    // 'confirm' - name of input
    // components['confirm'] - array of same-name components because of checkboxes and radios
    return <span className="error">Passwords are not equal.</span>
  }
};