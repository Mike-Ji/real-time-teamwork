import React, { Component } from 'react'
import Zone from './Zone'

class Zones extends Component{
	render(){
		const Zone1 = {name:"Zone 1", zipCode:"10012", numComments:10}
		const Zone2 = {name:"Zone 2", zipCode:"10012", numComments:10}
		const Zone3 = {name:"Zone 3", zipCode:"10012", numComments:10}
		const Zone4 = {name:"Zone 4", zipCode:"10012", numComments:10}
		
		return(
			<div>
				<ol>
					<li><Zone currentZone = {Zone1}/></li>
					<li><Zone currentZone = {Zone2}/></li>
					<li><Zone currentZone = {Zone3}/></li>
					<li><Zone currentZone = {Zone4}/></li>
				</ol>
			</div>
		)
	}
}

export default Zones