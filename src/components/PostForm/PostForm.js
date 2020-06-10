import React from 'react';
import axios from 'axios';
import style from './PostForm.module.css';

const PostForm = () => {

  const post = {};
  let formRef;

  const submitForm = async (event) => {
    event.preventDefault();
    alert('Post created successfully');
    formRef.reset();
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', post, {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    });
    console.log(res);
  }

  return (
    <form ref={(ref) => formRef = ref} onSubmit={submitForm} className={style.postForm}>
      <h1 className="text-center">Create Post</h1>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputName4">Name</label>
          <input onChange={(event) => post.author = event.target.value} type="text" className="form-control" id="inputName4" placeholder="Name" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Email</label>
          <input onChange={(event) => post.email = event.target.value} type="email" className="form-control" id="inputEmail4" placeholder="Email" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inputTitle">Title</label>
        <input onChange={(event) => post.title = event.target.value} type="text" className="form-control" id="inputTitle" placeholder="Title" />
      </div>
      <div className="form-group">
        <label htmlFor="textareaContent">Content</label>
        <textarea onChange={(event) => post.body = event.target.value} style={{resize: "none"}} className="form-control" id="textareaContent" rows="6" placeholder="Content"></textarea>
      </div>
      <div className="form-group text-center">
        <button type="submit" className="btn btn-primary">Create Post</button>
      </div>
    </form>
  );
}

export default PostForm;
