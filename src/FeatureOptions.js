import React, { Component } from 'react';

import slugify from 'slugify';

import Feature from './Feature.js';

import FEATURESTORE from './FEATURESTORE.js';

class FeatureOptions extends Component {
  render() {

      const options = FEATURESTORE[this.props.feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
    
            return (
                <Feature 
                    key={itemHash} 
                    item={item}
                    itemHash={itemHash} 
                    feature={this.props.feature}
                    slugifiedFeature={slugify(this.props.feature)} 
                    selectedName={this.props.selected[this.props.feature].name}
                    updateFeature={this.props.updateFeature} />
            );
      });
  
    return (
      <fieldset className="feature" key={this.props.featureHash}>
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        {options}
      </fieldset>
    )
  }
};

export default FeatureOptions;