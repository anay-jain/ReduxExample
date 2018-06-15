import {FETCH_POSTS , NEW_POSTS } from './types'

export function fetchposts(){
  return function(dispatch){
      // dispatch the data to the reducer
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => dispatch({
      type : FETCH_POSTS,
      payload :  posts // payload is data coming 
    }));


  }

}
