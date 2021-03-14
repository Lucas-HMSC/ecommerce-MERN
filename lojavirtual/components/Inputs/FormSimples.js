import React, { Component } from 'react';

export default class FormSimples extends Component {
  render() {
    const { value, name, placeholder, label, onChange } = this.props;
    return (
      <div className="form-input">
        {label && <label>{label}</label>}
        <input
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    );
  }
}
