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
		this.equals = this.equals.bind(this)
		this.setOperation = this.setOperation.bind(this)
		this.state = {out: "0"}
		this.firstOperand = 0
		this.secondOperand = 0
		this.operation = ""
		this.waitingForOperand = false
	}

	updateOutput(val) {
		this.setState({out: val})
	}

	clearOutput() {
		this.setState({out: "0"})
	}

	appendOutput(val) {	
		if (this.state.out === "0" || !this.isNumber(this.state.out)) {
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
	equals() {
		

		switch (this.operation) {
			case "+": 
				var tempVar = parseInt(this.state.out)
				if (Number.isNaN(tempVar)) {
					if (this.waitingForOperand) {
						this.secondOperand = this.firstOperand
					} 
				} else {
					if (this.waitingForOperand) {
						this.secondOperand = tempVar
					}
				}
				var sum = this.secondOperand + this.firstOperand;
				this.setState({out: sum})
				console.log("First operand: " + this.firstOperand)
				console.log("Second operand: " + this.secondOperand)
				this.waitingForOperand = false
				this.firstOperand = sum
				break
			default: 
				this.setState({out: "0"})
				this.operation = ""
		}
	}

	setOperation(val) {
		if (this.waitingForOperand) {
			this.equals()
		}
		this.firstOperand = parseInt(this.state.out)
		this.waitingForOperand = true
		this.operation = val
		
		this.setState({out: val})
	}

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
					<Button val="+" handleClick={this.setOperation}/>
				</div>
				<div className="row">
					<Button val="0" handleClick={this.appendOutput}/>
					<Button val="." handleClick={this.updateOutput}/>
					<Button val="=" handleClick={this.equals}/>
				</div>
			</div>
			
		)
	}
}

export default Calculator