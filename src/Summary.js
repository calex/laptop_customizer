import React, { Component } from 'react';

import SummaryItem from './SummaryItem.js';

import './SummaryStyles.css';

import returnInUSCurrencyFormat from './helpers/returnInUSCurrencyFormat.js';

class Summary extends Component {
  render() {

    const total = Object.keys(this.props.summaryItemsData).reduce(
      (acc, curr) => acc + this.props.summaryItemsData[curr].cost,
      0
    );

    const summaryItems = Object.keys(this.props.summaryItemsData).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.summaryItemsData[feature];
      
      return <SummaryItem key={idx} featureHash={featureHash} feature={feature} selectedOption={selectedOption} />
    });

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {!!this.props.summaryItemsData && summaryItems}
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {returnInUSCurrencyFormat(total)}
          </div>
        </div>
      </section>
    );
  }
};

export default Summary;