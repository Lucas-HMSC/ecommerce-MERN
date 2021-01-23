import React from 'react';

const BarraTopo = () => (
  <div className="flex horizontal full-width">
    <div className="flex-1 flex flex-start">
      <p>Ver Loja</p>
    </div>
    <div className="flex-1 flex flex-end">
      <p>Sair</p>
    </div>
  </div>
);

class Dashboard extends React.Component {
  render() {
    return (
      <div className="flex horizontal full-height">
        <div className="flex vertical">
          <p>Menu</p>
        </div>
        <div className="flex vertical full-width">
          <div className="flex horizontal">
            <BarraTopo />
          </div>
          <div className="flex full-height">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
