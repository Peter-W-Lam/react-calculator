import React, { Component } from "react"
import './Calculator.css'
import Button from './Button'
import Output from './Output'
import ChildComponent from './ChildComponent'

class Calculator extends Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(val) {
		console.log(val)
	}
	render() {
		return(
			<div className="Calculator">
				<Output audi="Some output here"/>
				<div className="row">
					<Button val="C" trigger={this.handleClick}/>
					<Button val="+/-" trigger={this.handleClick}/>
					<Button val="%" trigger={this.handleClick}/>
					<Button val="/" trigger={this.handleClick}/>
				</div>
				<div className="row">
					<Button val="7" trigger={this.handleClick}/>
					<Button val="8" trigger={this.handleClick}/>
					<Button val="9" trigger={this.handleClick}/>
					<Button val="x" trigger={this.handleClick}/>
				</div>
				<div className="row">
					<Button val="4" trigger={this.handleClick}/>
					<Button val="5" trigger={this.handleClick}/>
					<Button val="6" trigger={this.handleClick}/>
					<Button val="-" trigger={this.handleClick}/>
				</div>
				<div className="row">
					<Button val="1" trigger={this.handleClick}/>
					<Button val="2" trigger={this.handleClick}/>
					<Button val="3" trigger={this.handleClick}/>
					<Button val="+" trigger={this.handleClick}/>
				</div>
				<div className="row">
					<Button val="0" trigger={this.handleClick}/>
					<Button val="." trigger={this.handleClick}/>
					<Button val="=" trigger={this.handleClick}/>
				</div>
			</div>
			
		)
	}
}

export default Calculator