import React, { Component } from 'react';

class InputValor extends Component {
  state = {
    value: this.props.value,
    form: false,
  };

  onChange = (ev) => this.setState({ value: ev.target.value });
  toggleForm = () =>
    this.setState({ form: !this.state.form, value: this.props.value });

  handleSubmit(value) {
    this.props.handleSubmit(value);
    this.toggleForm();
  }

  renderForm() {
    const { value } = this.state;
    return (
      <div className="Input-valor input-valor-open">
        <div>
          <input
            value={value}
            onChange={this.onChange}
            name={this.props.name}
          />
        </div>
        <div>
          <div onClick={() => this.handleSubmit(value)}>
            <i className="fas fa-check" />
          </div>
          <div onClick={this.toggleForm}>
            <i className="fas fa-times" />
          </div>
        </div>
      </div>
    );
  }

  renderValue() {
    const { value } = this.props;
    return (
      <div className="Input-Valor">
        <span>{value}</span>
        <div onClick={() => this.toggleForm()}>
          <i className="fas fa-edit"></i>
        </div>
      </div>
    );
  }

  render() {
    const { form } = this.state;
    return form ? this.renderForm() : this.renderValue();
  }
}

export default InputValor;
