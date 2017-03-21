import React, {Component} from 'react';
import './styles.scss';

export default class ServiceDescription extends Component {
    constructor(props) {
        super()
    }
    /**
      * Recieve the props from content component
      * Display the content
      **/
    render() {
        return(
          <div className="description-component flex100 layout-row">
            <div className="flex60 layout-row alignStartCenter  layout-padding">Prepaid Gold Banner</div>
            <div className="flex40 layout-row alignStartCenter">
              <div className="flex50 sub-card layout-row alignCenterCenter layout-padding text-link">Show more offers</div>
              <div className="flex50 sub-card layout-row alignCenterCenter layout-padding text-link">Go to shop</div>
            </div>
          </div>
        )
    }
};
