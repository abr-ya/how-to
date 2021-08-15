import React, {useState} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

const CommentBox = ({saveComment, fetchComments}) => {
  const [comment, setComment] = useState('');

  const formHandler = (e) => {
    e.preventDefault();
    saveComment(comment);
    setComment('');
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <h4>Добавить комментарий</h4>
        <textarea
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <div>
          <button>Отправить комментарий</button>
        </div>
      </form>
      <button className='fetch-comments' onClick={fetchComments}>
        Загрузить комментарии
      </button>
    </div>
  );
};

export default connect(null, actions)(CommentBox);
