import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS } from './types';

export const saveComment = (comment) => ({
  type: SAVE_COMMENT,
  payload: comment,
});

// request to API
export const fetchComments = () => {
  const response = axios.get('http://jsonplaceholder.typicode.com/posts/1/comments');
  // console.log(response); // здесь промис => reduxPromise

  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
};
