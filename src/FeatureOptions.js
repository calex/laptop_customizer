import React, { Component } from 'react';

import slugify from 'slugify';

import Feature from './Feature.js';

class FeatureOptions extends Component {
  render() {

      const options = this.props.features[this.props.feature].map(item => {
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
      <>
        {!!this.props.features && options}
      </>
    )
  }
};

export default FeatureOptions;