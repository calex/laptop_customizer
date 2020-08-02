import React, { Component } from 'react';

import returnInUSCurrencyFormat from './helpers/returnInUSCurrencyFormat.js';

import './SummaryStyles.css';

class SummaryItem extends Component {
  render() {
    return (
      <div className="summary__option" key={this.props.featureHash}>
          <div className="summary__option__label">{this.props.feature} </div>
          <div className="summary__option__value">{this.props.selectedOption.name}</div>
          <div className="summary__option__cost">
              {returnInUSCurrencyFormat(this.props.selectedOption.cost)}
          </div>
      </div>
    );
  }
};

export default SummaryItem;