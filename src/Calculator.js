import React, { Component } from "react"
import './Calculator.css'
import Button from './Button'
import Output from './Output'
import ChildComponent from './ChildComponent'

class Calculator extends Component {
	constructor(props) {
		super(props)
		this.updateOutput = this.updateOutput.bind(this)
		this.appendOutput = this.appendOutput.bind(this)
		this.clearOutput = this.clearOutput.bind(this)
		this.state = {out: "0"}
		this.num1 = 0
		this.num2 = 0
		this.operation = 0
	}

	updateOutput(val) {
		this.setState({out: val})
	}

	clearOutput() {
		this.setState({out: "0"})
	}

	appendOutput(val) {	
		if (this.state.out == "0" || !this.isNumber(this.state.out)) {
			this.updateOutput(val)
		} else {
			this.setState((prevState) => {
				return {out: prevState.out.concat(val)}
			})
		}
	}

	isNumber(val) {
		return (val.includes("0") || 
				val.includes("1") ||
				val.includes("2") ||
				val.includes("3") ||
				val.includes("4") ||
				val.includes("5") ||
				val.includes("6") ||
				val.includes("7") ||
				val.includes("8") ||
				val.includes("9") 
		)
	}

	/* Operations */

	render() {
		return(
			<div className="Calculator">
				<Output out={this.state.out}/>
				<div className="row">
					<Button val="C" handleClick={this.clearOutput}/>
					<Button val="+/-" handleClick={this.updateOutput}/>
					<Button val="%" handleClick={this.updateOutput}/>
					<Button val="/" handleClick={this.updateOutput}/>
				</div>
				<div className="row">
					<Button val="7" handleClick={this.appendOutput}/>
					<Button val="8" handleClick={this.appendOutput}/>
					<Button val="9" handleClick={this.appendOutput}/>
					<Button val="x" handleClick={this.updateOutput}/>
				</div>
				<div className="row">
					<Button val="4" handleClick={this.appendOutput}/>
					<Button val="5" handleClick={this.appendOutput}/>
					<Button val="6" handleClick={this.appendOutput}/>
					<Button val="-" handleClick={this.updateOutput}/>
				</div>
				<div className="row">
					<Button val="1" handleClick={this.appendOutput}/>
					<Button val="2" handleClick={this.appendOutput}/>
					<Button val="3" handleClick={this.appendOutput}/>
					<Button val="+" handleClick={this.updateOutput}/>
				</div>
				<div className="row">
					<Button val="0" handleClick={this.appendOutput}/>
					<Button val="." handleClick={this.updateOutput}/>
					<Button val="=" handleClick={this.updateOutput}/>
				</div>
			</div>
			
		)
	}
}

export default Calculator