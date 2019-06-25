import React, {Component} from "react"

class Output extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	setOutput(val) {
		this.setState({out: val})
	}

	appendOutput(val) {
		this.setState(prevState => {
			
			return {
				out: prevState.out + " " + val
			}
		})
	}

	clearOutput() {
		this.setState({})
	}
	render() {
		return(
			<div className="Output">
				<h1>{this.props.audi}</h1>
			</div>
		)
	}
}

export default Output