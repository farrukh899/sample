import React, {Component} from 'react';
import './styles.scss';

export default class Buttons extends Component {
    constructor(porps) {
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
          <div className="button-component layout-row flex100 alignCenterCenter">
            <span>{this.props.text}</span>
          </div>
        )
    }
};
