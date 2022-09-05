import React from 'react';
import CommentsItem from '../comments-item/comments-item';

const CommentsList = (props) => {
  const {reviews} = props;

  return (
    <ol className="comment-list">
      {reviews.map((review, index) => (
        <CommentsItem
          key={review + index}
          review={review}
        />
      ))}
    </ol>
  );
};

export default CommentsList;
