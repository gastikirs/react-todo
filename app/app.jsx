import React from 'react'; //equals to var.. require
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<h1>Boilerplate 3 Project</h1>,
  document.getElementById('app')
);