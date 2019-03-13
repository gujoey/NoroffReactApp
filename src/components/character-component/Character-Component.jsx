import React from 'react';
export default class CharacterComponent extends React.Component{
	render(){
		return(
			<div className='[ col-sm-4 ]'>
				<div className='[ card ]'>
					<a href={"#/character-specific/"+this.props.id}></a>
					<div>
						<img src={this.props.image} alt="Rock and Morty"/>
					</div>
					
					<div>
						<h3>Name: {this.props.name}</h3>
						<p><b>Species: </b> {this.props.species}</p>
						<p><b>status: </b> {this.props.status}</p>
						<p><b>Gender: </b> {this.props.gender}</p>
						<p><b>Place of origin: </b> {this.props.origin}</p>
					</div>
				</div>
			</div>
		);
	}
}