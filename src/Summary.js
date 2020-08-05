import React, { Component } from 'react';

import SummaryItem from './SummaryItem.js';
import SummaryTotal from './SummaryTotal.js';

import './SummaryStyles.css';

class Summary extends Component {
  render() {

    const total = Object.keys(this.props).reduce(
      (acc, curr) => acc + this.props[curr].cost,
      0
    );

    const summaryItems = Object.keys(this.props).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props[feature];
      
      return <SummaryItem key={idx} featureHash={featureHash} feature={feature} selectedOption={selectedOption} />
    });

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {!!this.props && summaryItems}
        <SummaryTotal total={total} />
      </section>
    );
  }
};

export default Summary;