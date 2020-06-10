import React, { Component } from 'react';
import axios from 'axios';
import style from './PostList.module.css';
import Post from './Post/Post';

class PostList extends Component {

  state = {
    posts: []
  }

  async componentDidMount() {
    const posts = (await axios.get('https://jsonplaceholder.typicode.com/posts')).data;
    this.setState({
      posts: posts
    });
  } 

  render() {

    const posts = this.state.posts.map(post => {
      return <Post key={post.id} post={post} changePost={this.props.changePost} />;
    })

    return (
      posts.length > 0 ? <div className={style.postList}>
        {posts}
      </div> : <h2 className="text-center">Loading...</h2>
    );
  }
}

export default PostList;
