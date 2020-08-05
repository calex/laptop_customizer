import React, { Component } from 'react';

import FeatureOptions from './FeatureOptions.js';

import './FeatureStyles.css';

import FEATURESTORE from './FEATURESTORE.js';

class Features extends Component {
  render() {

    const features = Object.keys(FEATURESTORE).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
  
        return (
            <FeatureOptions key={featureHash} featureHash={featureHash} feature={feature} selected={this.props.selected} updateFeature={this.props.updateFeature} />
        );
    });

    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
        </form>
    );
  }
};

export default Features;