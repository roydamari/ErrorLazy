import React, { useState, useRef, lazy, Suspense } from 'react';
import './App.css';
const CommentError = lazy(() => import('./CommentError'));
const Comment = lazy(() => import('./Comment'));

function App() {

  const [comments, setComments] = useState([{ name: 'John', text: 'Some random comment' }]);
  const name = useRef();
  const text = useRef();

  const submitComment = (e) => {
    e.preventDefault()
    const newComment = comments;
    setComments(newComment.concat([{ name: name.current.value, text: text.current.value }]))
    name.current.value = '';
    text.current.value = '';
    name.current.focus();
  }

  return (
    <>
      <div className="App">
        <h1>My Blog</h1>
        <p>Read comments and post your own</p>
      </div>
      <form onSubmit={submitComment}>
        <div>Name:</div>
        <input ref={name} onKeyDown={(e) => { if (e.key === 'Enter') text.current.focus() }} required placeholder='Name' /><br />
        <div>Comment:</div>
        <textarea ref={text} required placeholder='your comment...' /><br />
        <input type='submit' />
      </form>
      {comments.map((comment, i) => {
        return <Suspense fallback={<div>Loading......</div>} key={i}><CommentError>
          <Comment index={i} comment={comment} />
        </CommentError>
        </Suspense>
      })}
    </>
  );
}

export default App;
