import React, { Component } from 'react';

export default class Hero extends Component {
  render() {
    return (
      <div className="flex horizontal">
        {this.renderPhotos()}
        {this.renderDetalhes()}
      </div>
    );
  }
}
