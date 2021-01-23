import React, { Component } from 'react';

import ListItems from './ListItems';

class Menu extends Component {
  state = { open: true };

  render() {
    const { open } = this.state;
    return (
      <div className="Menu">
        <div className="item-top">
          <i className="fas fa-arrow-left"></i>
        </div>
        <hr />
        <ListItems open={open} history={this.props.history} />
      </div>
    );
  }
}

export default Menu;
