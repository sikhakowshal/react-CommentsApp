import {Component} from 'react'
import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentsList: [], nameInput: '', commentInput: ''}

  onChangeName = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeComment = event => {
    this.setState({commentInput: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialColor =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * (initialContainerBackgroundClassNames.length - 1),
        )
      ]

    const newComment = {
      id: v4(),
      nameInput,
      commentInput,
      initialColor,
      isLiked: false,
      date: new Date(),
    }

    this.setState(preState => ({
      commentsList: [...preState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  toggleLike = id => {
    this.setState(preState => ({
      commentsList: preState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(eachComment => eachComment.id !== id),
    })
  }

  render() {
    const {commentsList, nameInput, commentInput} = this.state

    return (
      <div className="app-container">
        <div className="comments-app">
          <h1 className="title">Comments</h1>
          <div className="comments-input-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-img"
            />
            <form className="form-container" onSubmit={this.addComment}>
              <p className="instruction">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                className="name-input"
                placeholder="Your Name"
                value={nameInput}
                onChange={this.onChangeName}
              />
              <textarea
                type="text"
                className="comment-input"
                rows="8"
                placeholder="Your Comment"
                value={commentInput}
                onChange={this.onChangeComment}
              />
              <button className="add-comment-btn" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <hr className="line" />
          <div className="comments-container">
            <p className="heading">
              <span className="comments-count">{commentsList.length}</span>
              Comments
            </p>
            <ul className="comments-list">
              {commentsList.map(eachComment => (
                <CommentItem
                  key={eachComment.id}
                  eachComment={eachComment}
                  toggleLike={this.toggleLike}
                  deleteComment={this.deleteComment}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
