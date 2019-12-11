import React, {Component} from 'react';
import FeatureItem from '../FeatureItem/FeatureItem'

class FeatureOptions extends Component {
    render() {

        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
              console.log(this.props.features)
              const itemHash = slugify(JSON.stringify(item));
              <FeatureItem key={itemHash} className="feature__item"
              
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={item.name === this.props.selected[feature].name}
                onChange={e => this.updateFeature(feature, item)}
              />

              return (
                <fieldset className="feature" key={featureHash}>
                  <legend className="feature__name">
                    <h3>{feature}</h3>
                  </legend>
                  {options}
                </fieldset>
              );
            });
        
    
    }
}

export default FeatureOptions;
