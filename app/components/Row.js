import React from 'react';
import styles from './styles/row.css' 

export class Row extends React.Component {
	render () {
		return (
		    <tr>
		    	<td>{this.props.position}</td>
		    	<td>{this.props.data.username}</td>
		    	<td>{this.props.data.recent}</td>
		    	<td>{this.props.data.alltime}</td>
		    </tr>
		);
	}
}