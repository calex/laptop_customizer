import React from 'react';

import './FeatureStyles.css';

import returnInUSCurrencyFormat from './helpers/returnInUSCurrencyFormat.js';

function Feature(props) {
    return (
        <div key={props.itemHash} className="feature__item">
            <input
                type="radio"
                id={props.itemHash}
                className="feature__option"
                name={props.slugifiedFeature}
                checked={props.item.name === props.selectedName}
                onChange={e => props.updateFeature(props.feature, props.item)}
            />
            <label htmlFor={props.itemHash} className="feature__label">
                {props.item.name} ({returnInUSCurrencyFormat(props.item.cost)})
            </label>
        </div>
    );
}

export default Feature;