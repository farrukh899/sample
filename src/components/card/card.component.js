import React, {Component} from 'react';
import './styles.scss';

export default class Card extends Component {
    constructor() {
        super()
    }
    /**
      * When the component mounts
      * Get data from JSON {Object}
      */
    componentDidMount() {
    }

    render() {
        return(
          <div className="card-component flex100 layout-column layout-padding">
            <span className="card-title">My Things</span>
            {this.props.children}
          </div>
        )
    }
};
