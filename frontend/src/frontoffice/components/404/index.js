import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import config from "app-js/frontoffice/utils/config"

import './style.local.css'



export default
@connect((state, props) => ({}))
class NotFound extends React.Component {
	componentWillMount(){
    const title = `Page introuvable | ${config.app_name}`
    document.title = title
  }

  render(){

  	return (
  		<div className="body404">
  			<h3 className="text-center h3404">404 | Page introuvable</h3>
  		</div>
  	)
  }
}
