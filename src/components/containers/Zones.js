import React, { Component } from 'react'
import { CreateZone, Zone } from '../presentation'
import { APIManager} from '../../utils'

class Zones extends Component{
	constructor(){
		super()
		this.state = {
			zone:{
				name: '',
				zipCode: ''
			},
			list: []
		}
	}
	
	componentDidMount(){
		console.log('componentDidMount: ');
		
		APIManager.get('/api/zone', null, (err, response) => {
			if (err){
				alert('ERROR: ' + err.message)
				return
			}
			this.setState({
				list: response.results
			})
		})
	}
	
	updateZone(event){
		console.log('updateZone: ' + event.target.id + ' == ' + event.target.value);
		let updatedZone = Object.assign({}, this.state.zone);
		updatedZone[event.target.id] = event.target.value;
		this.setState({
			zone: updatedZone
		})
	}
	
	addZone(zone){
		//console.log('ADD ZONE: ' + JSON.stringify(this.state.zone));
		
		let updatedZone = Object.assign({}, zone);
		updatedZone['zipCodes'] = updatedZone.zipCode.split('.')
		console.log('ADD ZONE: ' + JSON.stringify(updatedZone))
		
		APIManager.post('/api/zone', updatedZone, (err, response) => {
			if (err){
				alert('ERROR: ' + err.message)
				return
			}
			
			console.log('ZONE CREATED: ' + JSON.stringify(response))
			let updatedList = Object.assign([], this.state.list);
			updatedList.push(response.result);
			this.setState({
				list: updatedList
			})
			
		})
	}
	
	render(){
		const listItems = this.state.list.map((zone, i) => {
			return (
				<li key={i}><Zone currentZone = {zone} /></li>
			)
		})
		
		return(
			<div>
				<ol>
					{listItems}
				</ol>
					
				
				<CreateZone onCreate={this.addZone.bind(this)} />
			</div>
		)
	}
}

export default Zones