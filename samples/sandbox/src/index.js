/* globals window, document*/
'use strict';

var Sidetap = require('../../../src');
var React = require('react');
window.React = React; // for dev
var DOM = React.DOM;

// SIDE MENU

var menu = React.createClass({
  render: function(){
    return  DOM.div({className: 'content'}, 'MENU');
  }
});

// NAVBAR

var navbar = React.createClass({
  render: function(){
    return DOM.div({className: 'navbar'},
      DOM.div({
        onClick: this.props.toggle,
        className: 'button'
      },
        DOM.div({className: 'bar'}),
        DOM.div({className: 'bar'}),
        DOM.div({className: 'bar'})
      ),
      DOM.div({className: 'title'},
        DOM.div({className: 'text'}, 'NAVBAR')
      )
    );
  }
});

// MAIN CONTAINER

var main = React.createClass({
  render: function(){
    return DOM.div({},
      navbar({toggle: this.props.toggle}),
      DOM.div({className: 'content'}, 'main content')

    );
  }
});

// APP

var App = React.createClass({
  displayName: 'demo',
  render: function(){
    return Sidetap({Menu: menu, Main: main});
  }
});

React.renderComponent(App(), document.body);
