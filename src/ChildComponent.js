import React, {Component} from "react"

class ChildComponent extends Component {
	render() {
		return(
			<button onClick={() => this.props.trigger("Omg")}>Click me!</button>
		)
	}

}

export default ChildComponent