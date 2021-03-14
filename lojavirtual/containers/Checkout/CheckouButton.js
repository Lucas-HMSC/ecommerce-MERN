import React, { Component } from 'react';

class CheckoutButton extends Component {
  render() {
    return (
      <div className="flex flex-right">
        <button className="btn btn-success btn-cta">
          <span>CONCLUIR PEDIDO</span>
        </button>
      </div>
    );
  }
}

export default CheckoutButton;
