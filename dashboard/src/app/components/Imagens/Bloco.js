import React from 'react';

class BlocoImagens extends React.Component {
  render() {
    const { handleSubit, imagens, onRemove } = this.props;
    return (
      <div className="Bloco-Imagens">
        <div>
          <input type="file" onChange={handleSubit} />
        </div>
        <div className="imagens-container">
          {imagens.map((src, idx) => (
            <div
              className="imagem-container"
              style={{ backgroundImage: `url("${src}")` }}
              key={idx}
            >
              <div
                className="imagem-remover"
                onClick={() => onRemove(idx)}
              >
                <span>{'-'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BlocoImagens;
