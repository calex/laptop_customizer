import React, { Component } from 'react';

import FeatureOptions from './FeatureOptions.js';

import './FeatureStyles.css';

class Features extends Component {
  render() {

    const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
  
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            <FeatureOptions feature={feature} features={this.props.features} selected={this.props.selected} updateFeature={this.props.updateFeature} />
          </fieldset>
        );
    });

    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {!!this.props.features && features}
        </form>
    );
  }
};

export default Features;