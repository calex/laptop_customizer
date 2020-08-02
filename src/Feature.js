import React, { Component } from 'react';

import './FeatureStyles.css';

import returnInUSCurrencyFormat from './helpers/returnInUSCurrencyFormat.js';

class Feature extends Component {
  render() {
    return (
        <div key={this.props.itemHash} className="feature__item">
            <input
                type="radio"
                id={this.props.itemHash}
                className="feature__option"
                name={this.props.slugifiedFeature}
                checked={this.props.item.name === this.props.selectedName}
                onChange={e => this.props.updateFeature(this.props.feature, this.props.item)}
            />
            <label htmlFor={this.props.itemHash} className="feature__label">
                {this.props.item.name} ({returnInUSCurrencyFormat(this.props.item.cost)})
            </label>
        </div>
    );
  }
};

export default Feature;