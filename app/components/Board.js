import React from 'react';
import { Row } from './Row';
import styles from './styles/board.css';

export class Board extends React.Component {

	constructor (props) {
		super(props);

		this.state = {
			sort: 'alltime'
		}

		this.click = this.click.bind(this);
	}

	click (sort) {

		if(this.state.sort != sort) {
			this.setState({sort: sort});
			this.props.onclick(sort);
		}
		
	}

	render () {

		let tbody = '';
		if (this.props.loading) {
			tbody = (
					<tr>
        				<td align="center" colspan="4">Loading...</td>
    				</tr>
    			);
		} else {
			tbody = this.props.leaderboard.map((element, i ) => < Row data={element} position={i}/>);
		}

		return (
			<table>
				<thead>
				    <tr>
				    	<th>#</th>
				    	<th>Camper name</th>
				    	<th className={this.state.sort == 'recent' ? styles.sorted : styles.order}
				    		onClick={(e) => this.click('recent')} >
				    			Points in past 30 days
				    	</th>

				    	<th className={this.state.sort == 'alltime' ? styles.sorted : styles.order} 
				    		onClick={(e) => this.click('alltime')} >
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