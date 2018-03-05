import React, { Component } from 'react';
import styles from './styles';

class Zone extends Component{
	render(){
		return(
			<div style={styles.container}>
				<h2 style={styles.header}>
					<a style={styles.title} href="#">
						{this.props.currentZone.name}
					</a>
				</h2>
				<span>{this.props.currentZone.zipCode}</span><br />
				<span>{this.props.currentZone.numComments} comments</span>
			</div>
		)
	}
}

export default Zone