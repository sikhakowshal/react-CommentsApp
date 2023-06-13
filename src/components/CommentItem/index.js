import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {eachComment, toggleLike, deleteComment} = props
  const {id, nameInput, date, commentInput, isLiked, initialColor} = eachComment

  const commentLikeImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const isLikedClass = isLiked ? 'liked' : ''

  const commentTime = formatDistanceToNow(date)

  const onClickLikeBtn = () => {
    toggleLike(id)
  }

  const onDeleteComment = () => {
    deleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-text-container">
        <div className={`initial-container ${initialColor}`}>
          <p className="initial">{nameInput[0]}</p>
        </div>
        <div className="comment-name-description-container">
          <div className="name-time-container">
            <h1 className="name">{nameInput}</h1>
            <p className="time">{commentTime}</p>
          </div>
          <p className="description">{commentInput}</p>
        </div>
      </div>
      <div className="comment-like-delete-container">
        <button className="like-btn" type="button" onClick={onClickLikeBtn}>
          <img src={commentLikeImg} className="like-img" alt="like" />
          <p className={`like-text ${isLikedClass}`}>Like</p>
        </button>
        <button
          className="delete-btn"
          data-testid="delete"
          type="button"
          onClick={onDeleteComment}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
