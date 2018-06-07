import React from 'react';
import Title from './Title';
import Board from './Board';
import styles from './styles/app.css';

const api = 'https://fcctop100.herokuapp.com/api/fccusers/top/';

export class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			leaderboard: [],
			isLoading: false
		};

		this.handleCriteria = this.handleCriteria.bind(this);
	}

	componentDidMount () {
		this.fetchLeaderboard('alltime');
	}

	handleCriteria (criteria) {
		this.fetchLeaderboard(criteria);
	}

	fetchLeaderboard (criteria) {
		this.setState({ isLoading: true });
		fetch(`${api}${criteria}`)
			.then(response => response.json())
			.then(data => this.setState({leaderboard: data, isLoading: false}))
	}

	render () {

		return (
			<div className={styles.container} >
				< Title />
				< Board leaderboard={this.state.leaderboard} onclick={this.handleCriteria} loading={this.state.isLoading} />
			</div>
		);
	}
}