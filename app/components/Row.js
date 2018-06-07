import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/row.css' 

const Row = (props) => {

		return (
		    <tr>
		    	<td>{props.position}</td>
		    	<td>{props.data.username}</td>
		    	<td>{props.data.recent}</td>
		    	<td>{props.data.alltime}</td>
		    </tr>
		);

}

Row.propTypes = {
	position: PropTypes.number,
	data: PropTypes.object
}

export default Row;