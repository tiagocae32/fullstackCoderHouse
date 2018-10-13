import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Form from './components/Form';
import Navigation from './components/Navigation';
import PostDetail from './components/PostDetail';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
class App extends Component {
 // constructor(props){
 //   super(props)
 // }
 render() {
   return (
     <div className='App'>
       <Form title={'Titulo'} />
       <PostDetail/>
       <store/>
       <Form/>
     </div>
   );
 }
}
const mapStateToProps= state => {
 return {
   posts: state.posts
 }
}
export default App;




