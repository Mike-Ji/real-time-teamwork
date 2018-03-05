import React, { Component } from 'react'
import Comment from './Comment'
import styles from './styles'

class Comments extends Component{
	
	constructor(){
		super()
		this.state = {
			list:[
				{body: 'comment 1', username: 'user 1', timestamp: '10:30'},
				{body: 'comment 2', username: 'user 2', timestamp: '10:45'},
				{body: 'comment 3', username: 'user 3', timestamp: '10:50'}
			]
		}
	}
	
	render(){
		const commentList = this.state.list.map((comment, i) => {
			return(
				<li><Comment currentComment={comment} /></li>
			) 
		})
		return(
			<div>
				<h2>Comments: Zone 1</h2>
				<div style={styles.comment.commentBox}>
					<ul style={styles.comment.commentsList}>
						{ commentList }
					</ul>
				</div>	
			</div>
		)
	}
}

export default Comments