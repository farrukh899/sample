import React, {Component} from 'react';
import './styles.scss';

export default class NotificationsWidget extends Component {
    constructor(props) {
        super()
        this.state = {
            actions: null
        }
    }
    /**
      * Recieve the props from content component
      * Display the content
      **/
    componentWillReceiveProps(newProps) {
        const actions = newProps.actions.map((action, index) => {
            return (
              <div className="flex50 layout-row alignCenterCenter action-item">
                <span>{action.title}</span>
              </div>
            )
        });
        this.setState({ actions });
    }
    componentDidMount() {

    }
    render() {
        return(
          <div className="action-widget flex100 layout-row layout-wrap">

          </div>
        )
    }
};
