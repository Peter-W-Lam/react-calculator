import React, {Component} from "react"
import './Output.css'
class Output extends Component {
	constructor(props) {
		super(props)
		
	}

	render() {
		return(
			<div className="Output">
				<h1>{this.props.out}</h1>
			</div>
		)
	}
}

export default Output