import React, {Component} from 'react';
import './styles.scss';
import Buttons from '../buttons/buttons.component.js';
import BalanceDetails from '../balancedetails/balance.details.component.js';

export default class Accordian extends Component {
    constructor() {
        super()
        this.state = {
            balanceDetails: {}
        }
    }
    /**
      * When the component mounts
      * Get data from JSON {Object}
      */
    componentWillReceiveProps(newProps) {
        this.setState({ balanceDetails: newProps.balanceDetails })
    }

    render() {
        return(
          <div className="accordian-component flex100 layout-column">
            <div className="accordian-toolbar flex100 layout-row layout-padding">
              <div className="flex5 layout-row alignStartCenter">
                <div className="icon-container layout-row alignCenterCenter">
                  <span className="material-icons">{this.props.icon}</span>
                </div>
              </div>
              <div className="service-type flex30 layout-row alignStartCenter"><span>{this.props.serviceType}</span></div>
              <div className="service-number flex20 layout-row alignStartCenter"><span>{this.props.serviceNumber}</span></div>
              <div className="service-number flex20 layout-row alignStartCenter"><span>{this.props.serviceUser}</span></div>
              <div className="service-number flex20 layout-row alignStartCenter">
                <span style={{color: this.props.balance >= 0 ? '#E53731' : '#FF6000'}}>Balance ${this.props.balance}</span>
              </div>
              <div className="service-number flex5 layout-row alignStartCenter">
                <span className="material-icons">keyboard_arrow_down</span>
              </div>
            </div>
            <div className="accordian-content flex-100">
              <div className="layout-row flex100 button-area layout-padding">
                <div className="flex40 layout-row alignSpacebetweenCenter">
                  <div className="flex40"><Buttons text={'top-up'}/></div>
                  <div className="flex45"><Buttons text={'Transfer balance'}/></div>
                </div>
                <div className="flex60 layout-row">
                  <div className="flex70"></div>
                  <div className="flex30"><Buttons text={'Subscription'}/></div>
                </div>
              </div>
              <div className="seperator"></div>

              <div className="layout-row flex100 layout-padding">
                <div className="flex30 alignStartStart layout-column">
                  <span className="text-emphasize-small">BALANCE</span>
                  <span className="text-emphasize-large">${this.props.balance}</span>
                </div>
                <div className="flex70 layout-column">
                  <BalanceDetails balance={this.state.balanceDetails}/>
                </div>
              </div>
            </div>
          </div>
        )
    }
};
