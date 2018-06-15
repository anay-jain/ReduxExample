//class based components
import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchposts } from '../action/postAction';
 class Posts  extends Component {
   componentWillMount(){
      this.props.fetchposts();
   }
  render(){
    const postItems = this.props.posts.map(post => (
      <div key = {post.id}>
      <h3>{post.title}</h3>
      <p>post.body</p>
      </div>
    ))
    return(
      <div>
      <h1>Posts </h1>
      {postItems}
      </div>

    )
  }

}
Posts.PropTypes ={
  fetchposts : PropTypes.func.isRequired ,
  posts : PropTypes.array.isRequired
};
const mapStoreToProps = state => ({
  posts: state.posts.items
})
export default connect(mapStoreToProps , {fetchposts})(Posts);
