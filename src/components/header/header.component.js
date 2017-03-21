import React, {Component} from 'react';
import './styles.scss';
export default class Header extends Component {
    constructor() {
        super()

    }

    render() {
        return(
          <div className="header-component flex100 layout-row layout-padding">
            <div className="logo-container flex30 alignStartCenter layout-row layout-padding">
              <div className="logo"></div>
            </div>
            <div className="logo-container flex70 layout-row alignEndCenter layout-padding"></div>
          </div>
        )
    }
};
