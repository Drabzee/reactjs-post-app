import React, { Component, Fragment } from 'react';
import PostList from '../../components/PostList/PostList';
import FullPost from '../../components/FullPost/FullPost';
import PostForm from '../../components/PostForm/PostForm';

class Blog extends Component {

  state = {
    currentPostId: 0
  }

  changePostHandler = (id) => {
    this.setState({
      currentPostId: id
    });
  }

  render() {
    return (
      <Fragment>
        <PostList changePost={this.changePostHandler} />
        <FullPost currentPostId={this.state.currentPostId} />
        <PostForm />
      </Fragment>
    );
  }
}

export default Blog;
