import React, { Component } from 'react';

import './SummaryStyles.css';

import returnInUSCurrencyFormat from './helpers/returnInUSCurrencyFormat.js';

class SummaryTotal extends Component {
  render() {
    return (
        <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
                {returnInUSCurrencyFormat(this.props.total)}
            </div>
        </div>
    );
  }
};

export default SummaryTotal;