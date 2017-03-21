import React, {Component} from 'react';
import './styles.scss';
import Buttons from '../buttons/buttons.component.js';

export default class BalanceDetails extends Component {
    constructor(props) {
        super()
        this.state = {
            balanceCards: null,
            allowanceCards: null,
            devices: null
        }
    }
    /**
      * When the component mounts
      * Get data from JSON {Object}
      */
    componentWillReceiveProps(newProps) {
        const cards = newProps.balance.allowances.map((allowance) => {
            return (
              <div className="flex30 layout-column alignStartStart balance-card layout-padding">
                <div className="flex100 layout-row alignStartCenter">
                  <span className="detail-info">{allowance.type} / {allowance.over}</span>
                </div>
                <div className="flex100 layout-row alignStartCenter">
                  <div className="flex50 layout-row alignStartCenter detail-info"><span>{allowance.total} {allowance.unit}</span></div>
                  <div className="flex50 layout-row alignStartCenter detail-info">
                    <span style={{color: allowance.remaining > 0 ? '#92BE26' : '#FF6000'}}>{allowance.remaining} {allowance.unit} Left</span>
                  </div>
                </div>
              </div>
            )
        });
        const subscriptions = newProps.balance.subscriptions.map((subscription) => {
            return (
              <div className="flex23 allowance-item layout-row alignCenterCenter"><span>{subscription}</span></div>
            )
        });
        const phones = newProps.balance.devices.map((device) => {
            return (
              <div className="device-container flex20 layout-row alignSpacebetweenCenter layout-padding">
                <div className="flex15">
                  <div className="icon-container layout-row alignCenterCenter">
                    <span className="material-icons icon">phone_android</span>
                  </div>
                </div>
                <div className="flex80"><span className="device-name flex100">{device.name}</span></div>
              </div>
            )
        })
        this.setState({ balanceCards: cards, allowanceCards: subscriptions, devices: phones });
    }

    render() {
        return(
          <div className="balance-component flex100 layout-column">
            <div className="flex100 alignStartCenter layout-row heading"><span>{this.props.balance.package}</span></div>
            <div className="flex100 layout-row alignSpacebetweenCenter card-container">
                {this.state.balanceCards}
            </div>
            <div className="flex100 alignStartCenter helpers"><span>More details . Upgrade</span></div>
              <div className="flex100 alignStartCenter heading"><span>ACTIVE ADD ON SERVICES</span></div>
              <div className="flex100 layout-row alignSpacebetweenCenter layout-wrap allowance-container">
                  {this.state.allowanceCards}
              </div>
              <div className="flex100 alignStartCenter helpers"><span>13 more available</span></div>

              <div className="flex100 alignStartCenter layout-row heading"><span>PHONES</span></div>
              <div className="flex100 layout-row alignSpacebetweenCenter layout-wrap allowance-container">
                    {this.state.devices}
              </div>
              <div className="seperator"></div>
              <div className="flex100 layout-row layout-padding">
                <div className="flex50 layout-row alignStartCenter"></div>
                <div className="flex50 layout-row alignEndCenter">
                  <span className="detail-info" style={{color: '#0A6BB5'}}>Configure automatic topup</span>
                </div>
              </div>
          </div>
        )
    }
};
