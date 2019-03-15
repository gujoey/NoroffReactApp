import React from 'react';

export default class CharacterSpecificComponent extends React.Component{
	render(){
		return(
			<div className='[ row ]'>
				<div className='[ col-sm-12]'>
					<div className='[ row char-spes ]'>
						<div className='[ col-sm-4 ]'>
							<img className='[ img-responsive ]' src={this.props.image}/>
						</div>

						<div className='[ col-sm-8 ]'>
							<h2>{this.props.name}</h2>
							<p>{this.props.species}</p>
							<p>{this.props.gender}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}