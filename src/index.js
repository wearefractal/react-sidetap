/* global window */

'use strict';

var ReactCompositeComponent = require('react/lib/ReactCompositeComponent');
var DOM = require('react/lib/ReactDOM');
var PropTypes = require('react/lib/ReactPropTypes');

var types = {
  Menu: PropTypes.func.isRequired,
  Nav: PropTypes.func.isRequired,
  Main: PropTypes.func.isRequired,
  slidePercent: PropTypes.number
};

var sidetap = ReactCompositeComponent.createClass({
  
  displayName: 'SideTap',
  propTypes: types,
  
  getDefaultProps: function(){
    return {
      slidePercent: '85'
    };
  },
  
  getInitialState: function(){
    return {
      open: false
    };
  },

  componentWillMount: function(){
  },

  componentWillReceiveProps: function(props){
  },

  componentWillUnmount: function(){
  },

  toggle: function(){
    this.setState({open: !this.state.open});
  },

  render: function(){

    var menuStyle = {
      marginLeft: this.state.open ? 0 : '-100vw',
      width: this.props.slidePercent + 'vw',
      height: '100%',
      transition: 'all 0.2s ease'
    }

    var mainStyle = {
      position: 'absolute',
      top: '0px',
      marginLeft: this.state.open ? this.props.slidePercent + 'vw' : 0,
      transition: 'all 0.2s ease'
    }

    console.log(mainStyle);

    return DOM.div({}, 
  
      DOM.div({className: 'menu', style: menuStyle},
        this.props.Menu({
          open: this.state.open,
        })
      )
    ,
      DOM.div({className: 'main', style: mainStyle},
        this.props.Main({
          toggle: this.toggle, 
        })
      )

    );
  
  }
});

module.exports = sidetap;