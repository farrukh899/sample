import React, {Component} from 'react';
import './styles.scss';
import content from './content.json';
import InfoContent from './infocomponent/info.component.js';
import ServiceDescription from './servicedescription/description.component.js';
import NotificationsWidget from './notificationwidget/notification.widget.component.js';
import ActionWidget from './actionwidget/actionwidget.component.js';
import Card from '../card/card.component.js';
import Accordian from '../accordian/accordian.component.js';

export default class Content extends Component {
    constructor() {
        super()
        this.state = {
            userInfo: {},
            serviceDescription: {},
            notifications: [],
            actions: [],
            balanceDetails: {}
        }
    }
    /**
      * When the component mounts
      * Get data from JSON {Object}
      */
    componentDidMount() {
      this.setState({ userInfo: content.userInfo,
        notifications: content.notifications, actions: content.actions, balanceDetails: content.balance });
    }

    render() {
        return(
          <div className="content-component flex100 layout-column layout-padding">
            <InfoContent user={this.state.userInfo}/>
            <ServiceDescription service={this.state.serviceDescription}/>
            <div className="layout-row alignSpacebetweenCenter widget-container">
              <div className="flex40"><NotificationsWidget notifications={this.state.notifications}/></div>
              <div className="flex58 layout-row layout-wrap"><ActionWidget actions={this.state.actions}/></div>
            </div>
            <Card>
              <Accordian icon={'sim_card'} serviceType={'Prepaid Bronze'}
                serviceNumber={'099 7654 321'} serviceUser={'Katherine'} balance={32}
                balanceDetails={this.state.balanceDetails}/>
            </Card>
          </div>
        )
    }
};
