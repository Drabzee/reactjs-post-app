import React, { useState, useEffect } from 'react';
import axios from 'axios';
import authors from '../../data/authors';
import style from './FullPost.module.css';

const FullPost = (props) => {

  const [post, setPost] = useState(undefined);
  const [author, setAuthor] = useState(undefined);

  useEffect(() => {
    if(props.currentPostId) {
      (async () => {
        const post = (await axios.get(`https://jsonplaceholder.typicode.com/posts/${props.currentPostId}`)).data;
        const author = authors.find(user => {
          return user.id === post.userId;
        });
        setPost(post);
        setAuthor(author);
      })();
    }
  }, [props.currentPostId]);

  const postDOM = (post && author) ? (post.id===props.currentPostId) ? <div className={"jumbotron "+style.fullPost}>
    <h1 className={"display-4 "+style.title}>{post.title}</h1>
    <p className="lead">{post.body}</p>
    <hr className="my-4" />
    <footer className="d-flex flex-row justify-content-between">
      <div>
        <p style={{margin: 0}} className="font-weight-bold">{author.name}</p>
        <p className="font-weight-light font-italic">{author.email}</p>
      </div>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="/" role="button">Visit Post</a>
      </p>
    </footer>
  </div> : <h3 className="text-center">Loading...</h3> : <h3 className="text-center">Please select a post!</h3>;

  return postDOM;
}

export default FullPost;
