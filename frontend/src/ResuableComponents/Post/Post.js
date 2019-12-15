import React from 'react';
import { Link } from 'react-router-dom';
import './Post.scss';

const Post = ({post}) => {
  return(
    <div id="post">
      <div className="post__header">
        <Link to="/profile">
          <img src={post.userIcon} alt="" />
        </Link>
        
        <div className="post__username__and__options">
          <Link to="/profile">
            <div className="post__username">
              {post.username}
            </div>
          </Link>
          <div className="post__options">
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>
      </div>
      <div className="post__image" style={{background: `url('${post.image}'`}} >
      </div>
      <div className="post__actions">
        <div className="post__left_actions">
          <i className="far fa-heart"></i>
          <i className="far fa-comment"></i>
          <i className="fas fa-share-alt"></i>
        </div>
        <div className="post__right_actions">
          <i className="far fa-bookmark"></i>
        </div>
      
      </div>
      <div className="post__engagement">

        <div className="post__likes">
          146 likes
        </div>

        <div className="post__post_content">
          <Link to="profile">
            <div className="post__poster_username">
              aaron.shines
            </div>
          </Link>
          <div className="post__body">
            Always True To Self
          </div>
        </div>
        <div className="post__viewall_button_wrapper">
          <span className="post__viewall_button">
          View all 18 comments
          </span>
        </div>
        <div className="post__comments">
          {[1,2].map( (comment, index) => {
            return(
              <div className="post__comment" key={index}>
                <Link to="profile">
                  <div className="post__commenter_username">
                  james.malroy
                  </div>
                </Link>
                <div className="post__comment_body">
                  Always True To Self
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="post__comment_input">
        
      </div>
    </div>
  );
}
export default Post;