import React from 'react'

const CommentCard = ({ dataComments }) => {
  

  return (
    <>
      {dataComments.map(comment => (
        <div className='card-comment' key={comment.id}>
          <div className='card-user-info'>
            <img src={comment.image}/>
            <p className='comment-user'>{comment.name}</p>
            <div className='card-text-info'>
            <p className='comment-text'>{comment.info}</p>
          </div>
          </div>
          <div className='card-comment-text'>
            {comment.message}
          </div>
        </div>
      ))}
    </>
  );
};

export default CommentCard
