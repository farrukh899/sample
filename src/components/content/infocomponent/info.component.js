import React, {Component} from 'react';
import './styles.scss';

export default class InfoContent extends Component {
    constructor(props) {
        super()
    }
    /**
      * Recieve the props from content component
      * Display the content
      **/
    render() {
        return(
          <div className="info-component flex100 layout-row layout-padding">
            <div className="flex60 layout-row alignStartCenter">
              <div className="user-icon layout-row alignCenterCenter material-icons">person</div>
              <div className="welcome-message">
                <span><span className="highlighted-text">Welcome</span>, <span className="emphasis-text">{this.props.user.firstName}!</span></span>
              </div>
            </div>
            <div className="flex40 layout-column">
              <div className="layout-row flex100">
                <div className="flex40 layout-row alignStartCenter text-content-light">Name</div>
                <div className="flex60 layout-row alignEndCenter text-content-bold">{this.props.user.firstName} {this.props.user.lastName}</div>
              </div>
              <div className="layout-row flex100">
                <div className="flex40 layout-row alignStartCenter text-content-light">Customer</div>
                <div className="flex60 layout-row alignEndCenter text-content-bold">{this.props.user.customerSince}</div>
              </div>
              <div className="layout-row flex100">
                <div className="flex40 layout-row alignStartCenter text-content-light">Address</div>
                <div className="flex60 layout-row alignEndCenter text-content-bold">{this.props.user.address}</div>
              </div>
            </div>
          </div>
        )
    }
};
