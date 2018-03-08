import React, { Component } from 'react'

class CreateComment extends Component{
	
	constructor(){
		super()
		this.state = {
			comment: {
				
			}
		}
	}
	updateComment(event){
		console.log("updateComment: " + event.target.id + " == " + event.target.value);
		let updatedComment = Onject.assign({}, this.state.comment)
		updatedComment[event.target.id] = event.target.value;
		this.setState({
			comment: updatedComment
		})
	}
	
	
	
	render(){
		return (
			<div>
				<h3>Create Comment</h3>
				<input onChange={this.updateComment.bind(this)} id="username" 
					className="form-control" type="text" placeholder="Username" /><br />
				<input onChange={this.updateComment.bind(this)} id="body" 
					className="form-control" type="text" placeholder="Comment" /><br />
				<button className="btn btn-info"> Submit Comment </button>
			</div>
		)
	}
}

export default CreateComment