import React, { PureComponent } from 'react';
import './Card.css';

class Card extends React.Component {
  render() {
    const { savedData } = this.props;

    return (
      <div className="card">
      {Object.keys(savedData()).map(key => (
          <div>
          <h3 key={key} className="card__title card-title">{key}</h3>
          <div className="card-scrollable-content">{savedData()[key]}</div>
          </div>
      ))}
      </div>
    );
  }
}

export default Card;
