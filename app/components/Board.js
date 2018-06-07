import React from 'react';
import PropTypes from 'prop-types';
import Row  from './Row';
import styles from './styles/board.css';

class Board extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			sort: 'alltime'
		}

		//this.click = this.click.bind(this);
	}

	handleClick (sort) {

		if(this.state.sort != sort) {
			this.setState({sort});
			this.props.onclick(sort);
		}
		
	}

	render () {

		let tbody = '';
		if (this.props.loading) {
			tbody = (
					<tr>
        				<td align="center" colSpan="4">Loading...</td>
    				</tr>
    			);
		} else {
			tbody = this.props.leaderboard.map((element, i ) => < Row data={element} position={i} key={'tr_' + i} />);
		}

		return (
			<table>
				<thead>
				    <tr>
				    	<th>#</th>
				    	<th>Camper name</th>
				    	<th className={this.state.sort == 'recent' ? styles.sorted : styles.order}
				    		onClick={(e) => this.handleClick('recent')} >
				    			Points in past 30 days
				    	</th>

				    	<th className={this.state.sort == 'alltime' ? styles.sorted : styles.order} 
				    		onClick={(e) => this.handleClick('alltime')} >
				    			All time points
				    	</th>
				    </tr>
				</thead>
				<tbody>
					{tbody}
				</tbody>
			</table>
		);
	}
}

Board.propTypes = {
	onclick: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
	leaderboard: PropTypes.array.isRequired
}

export default Board;