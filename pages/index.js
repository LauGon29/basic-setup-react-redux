import React, {Component} from "react";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import { exampleAction } from '../store/example/example.action';
import Title from "../components/Title";
// import { exampleAction } from '../store'
// import store from "../store/store";

class Index extends React.Component {
	componentDidMount() {
		this.props.exampleAction('Main Title Example');
	}

	render() {
		const storeProps = this.props;
		const exampleData = storeProps.example.exampleData;

		return <>
			<div>
				<Title title={exampleData}/>
			</div>
			<div>
				<h2>Subtitle</h2>
			</div>
		</>
	}
}

const mapDispatchToProps = dispatch => {
	const bindFunction = {
		exampleAction: bindActionCreators(exampleAction, dispatch)
	};
	return {
		exampleAction: bindFunction.exampleAction
	};
};


const mapStateToProps = exampleData => exampleData;

export default connect(mapStateToProps, mapDispatchToProps)(Index);
