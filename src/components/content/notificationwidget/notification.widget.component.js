import React, {Component} from 'react';
import './styles.scss';

export default class NotificationsWidget extends Component {
    constructor(props) {
        super()
        this.state = {
            notifications: null
        }
    }
    /**
      * Recieve the props from content component
      * Display the content
      **/
    componentWillReceiveProps(newProps) {
        const notification = newProps.notifications.map((notification, index) => {
            return (
              <div className="flex100 layout-row alignStartCenter notification-item">
                <div className="flex10 layout-row alignStartCenter layout-padding">
                  <div className="notification-highlight layout-row alignCenterCenter">{notification.items}</div>
                </div>
                <div className="flex90 layout-row alignStartCenter layout-padding">
                  <span className="text-notification">{notification.description}</span>
                </div>
              </div>
            )
        });
        this.setState({ notifications: notification });
    }
    componentDidMount() {

    }
    render() {
        return(
          <div className="notifications-widget flex100 layout-column">
            {this.state.notifications}
            <div className="goto-link layout-row alignStartCenter layout-padding">
              <span className="text-notification">Go to notifications</span>
            </div>
          </div>
        )
    }
};
