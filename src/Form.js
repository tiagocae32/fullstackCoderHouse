import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Form extends Component{

	constructor(props){
		super(props)
		this.state = {posts:[]}
		this.submitPost = this.submitPost.bind(this)
	}
	componentDidMount(){
      this.inputTitle.focus();
      this.inputTitle.style.border = " 4px solid green"
      
    }

    submitPost = (e)=>{
    	e.preventDefault();
    	//console.log(this.inputTitle.value)
    	let post = {
			title : this.inputTitle.value,
			description : ''
		}

		this.setState({
			posts:[...this.state.posts,
			...[post]
			]
		})
    };
	
	inputTitle;
	description;


	 componentWillMount(){
    	const url = "https://jsonplaceholder.typicode.com/posts";
    	axios(url).then(response=> this.setState({posts : response.data}))
  }

	render(){
		//let Post = (props)=> <p> {props.post.title}</p>;
		//let parrafo = index % 2 == 0 ? 'par': 'impar'

		/*let postList = this.state.posts.map(post=>
			return(<Post className={parrafo})
		});*/



		//componente stateless

		let listaAvatars = [
		{alias : "Tiago", imageUrl: 'http://i.pravatar.cc/150?'},
		{alias : "Matias", imageUrl: 'http://i.pravatar.cc/180?'},
		{alias : "Carlos", imageUrl: 'http://i.pravatar.cc/190?'}
		]

		let Avatar = (props)=>{
			return <div><p>{props.alias}</p><img src = {props.imageUrl}/></div>
		}

		let AvatarData = listaAvatars.map(data=> {
			return (<Avatar alias = {data.alias} imageUrl = {data.imageUrl}/>)
		})



		 

     let Post = (props) => <p className={props.className}>{props.post.title}</p>
     let postList = this.state.posts.map( (post, index) => {
     let parrafo = index % 2 == 0 ? 'par':'impar'
     return (<Post className={parrafo} post={post} />)
     })


		

		return(
			
			<form onSubmit={this.submitPost}  className = "tiago1">
			<h1>Titulo</h1>
			<input className = "input1" ref = {(inputTitle)=>{this.inputTitle = inputTitle}} type="text"/>
			<br></br>
			
			<h2>Mensajes</h2>
			<textarea></textarea>
			
			<br></br>
			
			<input onClick={this.submitPost} className = "boton" type="submit" value="Buscar"/>
			
			<p>({this.state.posts.length})</p>
			
			<div>
			{postList}
			</div>

			<div>
			{AvatarData}
			</div>

			</form>
			)
		}

	}
	
	
	export default Form;