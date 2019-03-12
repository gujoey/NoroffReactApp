//imports
import React from 'react';
import Layout from './../../components/Layout/Layout';
import CharcterComponent from './../../components/character-component/Character-Component';

export default class Homepage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			rickMortyObj: [],
			rickMortyCards: []
		}
	}
	
	componentDidMount(){
		const app = this;
		app.getData();
	}
	
	getData(){
		const app = this;
		fetch('https://rickandmortyapi.com/api/character/')
		.then(response =>{
			return response.json()
		})
		.then(result =>{
			app.setState({
				rickMortyObj.result.results
			})
		});
	}
}