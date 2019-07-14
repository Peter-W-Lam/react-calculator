import React, { Component } from 'react';
import './Button.css'
class Button extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div className="Button">
				<button onClick={() => this.props.handleClick(this.props.val)}>{this.props.val}</button> 
			</div>
		)
	}
}

export default Button
