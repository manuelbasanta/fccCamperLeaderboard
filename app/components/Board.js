import React from 'react';
import { Row } from './Row';
import styles from './styles/board.css';

export class Board extends React.Component {

	constructor (props) {
		super(props);

		this.click = this.click.bind(this);
	}

	click (e, sort) {

		if(!(e.target.classList).contains(styles.sorted)) {
			document.getElementsByClassName(styles.sorted)[0].classList.remove(styles.sorted);
			e.target.classList.add(styles.sorted);
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
				    	<th className={`${styles.order}`} onClick={(e) => this.click(e, 'recent')} >Points in past 30 days</th>
				    	<th className={`${styles.sorted} ${styles.order}`} onClick={(e) => this.click(e, 'alltime')} >All time points</th>
				    </tr>
				</thead>
				<tbody>
					{tbody}
				</tbody>
			</table>
		);
	}
}