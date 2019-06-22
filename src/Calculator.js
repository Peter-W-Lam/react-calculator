import React, { Component } from "react"
import './Calculator.css'
import Button from './Button'
import Output from './Output'
class Calculator extends Component {

	render() {
		return(
			<div className="Calculator">
				<Output />
				<div className="row">
					<Button val="C" />
					<Button val="+/-" />
					<Button val="%" />
					<Button val="/" />
				</div>
				<div className="row">
					<Button val="7" />
					<Button val="8" />
					<Button val="9" />
					<Button val="x" />
				</div>
				<div className="row">
					<Button val="4" />
					<Button val="5" />
					<Button val="6" />
					<Button val="-" />
				</div>
				<div className="row">
					<Button val="1" />
					<Button val="2" />
					<Button val="3" />
					<Button val="+" />
				</div>
				<div className="row">
					<Button val="0" />
					<Button val="." />
					<Button val="=" />
				</div>
			</div>
			
		)
	}
}

export default Calculator