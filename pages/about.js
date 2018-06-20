import React, {Component} from "react";
import {connect} from "react-redux";

class About extends React.Component {
	render() {
		return <>
			<div>
				<h1>About</h1>
			</div>
		</>
	}
}

export default connect()(About);
