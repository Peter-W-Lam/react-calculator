import React, { Component } from "react"
import './Calculator.css'
import Button from './Button'
import Output from './Output'
import ChildComponent from './ChildComponent'
import phone from './iphone.png'
class Calculator extends Component {
	
	
	constructor(props) {
		super(props)

		this.clear = this.clear.bind(this)
		this.equals = this.equals.bind(this)

		this.changeSign = this.changeSign.bind(this)
		this.percentage = this.percentage.bind(this)
		this.numberHandle = this.numberHandle.bind(this)
		this.concatInput = this.concatInput.bind(this)
		this.operation = this.operation.bind(this)
		this.configureOutput = this.configureOutput.bind(this)
		this.state = {output: "0", 
					  firstOperand: 0, 
					  secondOperand: 0, 
					  waitingForOperand: false, 
					  operation: "", 
					  reset: true}
		this.waitingForOperand = false
	}

	clear(val) {
		this.setState({output: "0", reset: true})
	}

	operation(val) {
		this.setState({output: val, operation: val, waitingForOperand: true})
	}

	
	numberHandle(val) {
		var currentOutput = this.state.output
		var newOutput = this.concatInput(currentOutput, val)
		if (this.state.waitingForOperand) {
			this.setState(prevState => {
				return {secondOperand: Number.parseFloat(newOutput)}
			})

		} else {
			this.setState(prevState => {
				return {firstOperand: Number.parseFloat(newOutput)}
			}, () => {
			})
		}
	}


	//TODO: Refactor this
	concatInput(currentOutput, newVal) {
		var toReturn = ""
		// Case of trying to add a second decimal point
		if (newVal === "." && currentOutput.includes(".")) {
			toReturn = currentOutput
		}
		// If previous input is operation sign 
		else if (isNaN(Number.parseFloat(currentOutput))) {
			toReturn = newVal
		}
		// If leading zero / a reset is needed
		else if (this.state.reset && newVal != ".") {
			toReturn = newVal
			this.setState({reset: false})
		} 
		else { // All others
			toReturn = this.state.output.concat(newVal)
		}
		this.setState({output: toReturn})
		return toReturn
	}

	/* Operations */
	equals(val) {
		console.log("First Operand: ", this.state.firstOperand, ", Second Operand: ", 
					this.state.secondOperand)
		this.setState({waitingForOperand: false})
		switch(this.state.operation) {
			case "+": 
				let result = this.state.firstOperand + this.state.secondOperand
				this.setState({output: result.toString(), firstOperand: result})
				break
			case "-": 
				let result2 = this.state.firstOperand - this.state.secondOperand
				this.setState({output: result2.toString(), firstOperand: result2})
				break
			case "x": 
				let result3 = this.state.firstOperand * this.state.secondOperand
				this.setState({output: result3.toString(), firstOperand: result3})
				break
			case "/": 
				let result4 = this.state.firstOperand / this.state.secondOperand
				this.setState({output: result4.toString(), firstOperand: result4})
				break
		}
		this.setState({reset: true})
	}

	percentage(val) {
		this.setState({waitingForOperand: false})
		var toMultiply = 1
		if (this.state.secondOperand != 0) {
			toMultiply = this.state.secondOperand * 0.01
		}
		let result = this.state.firstOperand * toMultiply
		this.setState({output: result.toString(), firstOperand: result, reset: true})
	}

	changeSign(val) {
		if (this.state.waitingForOperand) {
			var negated = this.state.secondOperand
			if (negated != 0) {
				negated = -negated
			}
			this.setState({output: negated.toString(), secondOperand: negated})
		} else {
			var negated = this.state.firstOperand
			if (negated != 0) {
				negated = -negated
			}
			this.setState({output: negated.toString(), firstOperand: negated})
		}
	}

	configureOutput(out) {
		var style = {
		}
		if (out.length < 12) {
			style = {
				fontSize: "35px",
				paddingBottom: "0px"
			}
		} else if (out.length >= 12 && out.length <= 20) {
			style = {
				fontSize: "20px",
				paddingTop: "14px", 
				paddingBottom: "14px"
			}
		} else {
			style = {
				fontSize: "17px",
				paddingTop: "17px",
				paddingBottom: "17px"
			}
		}
		return style
	}

	render() {
		return(
			<div className="Calculator">
				<div className="innerElements">
					<Output style={this.configureOutput(this.state.output)} out={this.state.output}/>
					<div className="row">
						<Button val="C" handleClick={this.clear}/>
						<Button val="+/-" handleClick={this.changeSign}/>
						<Button val="%" handleClick={this.percentage}/>
						<Button val="/" handleClick={this.operation}/>
					</div>
					<div className="row">
						<Button val="7" handleClick={this.numberHandle}/>
						<Button val="8" handleClick={this.numberHandle}/>
						<Button val="9" handleClick={this.numberHandle}/>
						<Button val="x" handleClick={this.operation}/>
					</div>
					<div className="row">
						<Button val="4" handleClick={this.numberHandle}/>
						<Button val="5" handleClick={this.numberHandle}/>
						<Button val="6" handleClick={this.numberHandle}/>
						<Button val="-" handleClick={this.operation}/>
					</div>
					<div className="row">
						<Button val="1" handleClick={this.numberHandle}/>
						<Button val="2" handleClick={this.numberHandle}/>
						<Button val="3" handleClick={this.numberHandle}/>
						<Button val="+" handleClick={this.operation}/>
					</div>
					<div className="row">
						<Button val="0" handleClick={this.numberHandle}/>
						<Button val="." handleClick={this.numberHandle}/>
						<Button val="=" handleClick={this.equals}/>
					</div>
				</div>
			</div>
			
		)
	}
}

export default Calculator