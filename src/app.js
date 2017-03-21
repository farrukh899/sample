import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.component.js';
import Sidebar from './components/sidebar/sidebar.component.js';
import Content from './components/content/content.component.js';
import './theme/styles.scss';
import './styles/main.scss';

ReactDOM.render(
  <div className="flex100 layout-column">
    <div className="flex100">
      <Header/>
    </div>
    <div className="flex100 layout-row layout-padding">
      <div className="flex20 layout-column"><Sidebar/></div>
      <div className="flex80"><Content/></div>
    </div>
  </div>
  ,
  document.getElementById('root')
);

if (module.hot) module.hot.accept();
