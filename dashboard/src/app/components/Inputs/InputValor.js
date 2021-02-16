import React, { Component } from 'react';

class InputValor extends Component {
  state = {
    value: this.props.value,
    form: false,
  };

  onChange = (ev) => this.setState({ value: ev.target.value });
  toggleForm = () => this.setState({ form: !this.state.form });

  renderForm() {}

  renderValue() {
    const { value } = this.state;
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
