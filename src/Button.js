import React, { Component } from 'react';
import './Button.css'
class Button extends React.Component {
	render() {
		return(
			<div className="Button">
				<input type="button" value={this.props.val} />
			</div>
		)
		
	}
}

export default Button