import React from 'react';
import style from './Post.module.css';
import authors from '../../../data/authors';

const Post = (props) => {
  
  const author = authors.find(user => {
    return user.id === props.post.userId;
  });

  return (
    <div className={"card "+style.post}>
      <div className="card-body">
        <h5 className={"card-title "+style.title}>{props.post.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{author.name}</h6>
        <p className={"card-text "+style.body}>{props.post.body}</p>
        <button onClick={props.changePost.bind(this, props.post.id)} className="btn btn-link">Detail</button>
        <button className="btn btn-link">Visit</button>
      </div>
    </div>
  )
}

export default Post;
