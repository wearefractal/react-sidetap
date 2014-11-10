'use strict';

var Sidetap = require('../../../src');
var React = require('react');
window.React = React; // for dev
var DOM = React.DOM;

// SIDE MENU

var menu = React.createClass({
  render: function(){
    return DOM.div({}, "menu");
  }
});

// NAVBAR 

var navbar = React.createClass({
  render: function(){
    return DOM.div({className: 'navbar'},
      DOM.button({onClick: this.props.toggle}, '='),
      DOM.div({}, "NAV")

    )
  }
});

// MAIN CONTAINER 

var main = React.createClass({
  render: function(){
    return DOM.div({},
      navbar({toggle: this.props.toggle}),
      DOM.div({}, "main content")

    )
  }
});

// APP

var App = React.createClass({
  displayName: 'demo',
  render: function(){
    return Sidetap({Menu: menu, Main: main})
  }
});

React.renderComponent(App(), document.body);