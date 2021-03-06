import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class PostDetail extends Component {
   constructor(props) {
       super(props)
console.log(props)
       this.state={
           posts: []
       }
   }
   componentWillMount() {
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(response => this.setState({posts: response.data}))
   }
   render() {
       return (
           <div>
               {/* <h2>Detalle del post {this.props.match.params.id} </h2> */}
               <ul>
                   {
                       this.state.posts.map(post => {
                           return (
                               <li>
                                   <Link to={{
                                       pathname: `posts/${post.id}`,
                                       state: {post}
                                   }}>
                                       {post.title}
                                   </Link>
                               </li>
                           )
                       })
                   }
               </ul>
           </div>
       )
   }
}
export default PostDetail;

   
