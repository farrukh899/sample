import React, {Component} from 'react';
import './styles.scss';
import sidebarConfig from './sidebar.json';

export default class Sidebar extends Component {
    constructor() {
        super()
        this.state = {
          sidebar: []
        }
    }
    componentDidMount() {
        const sidebarItems = sidebarConfig.map((item) => {
            return (
              <div className="layout-column">
                <div className="layout-row flex95">
                  <span className="material-icons icon layout-row alignStartCenter">{item.icon}</span>
                  <span className="sidebar-option">{item.title}</span>
                </div>
                <div className="seperator"></div>
              </div>
            )
        });
        this.setState({
            sidebar: sidebarItems
        });
    }
    render() {
        return(
          <div className="sidebar-component flex100 layout-column layout-padding">
              <div className="flex10 layout-column alignCenterStart sidebar-title layout-padding">
                <span>My Digital Life</span>
                <div className="seperator"></div>
              </div>
              <div className="flex90 layout-column">
                {this.state.sidebar}
              </div>
          </div>
        )
    }
};
