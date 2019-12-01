import React from 'react';
import './Post.scss';

const Post = ({post}) => {
  console.log("post", post);
  const image = 'https://images.pexels.com/photos/3133688/pexels-photo-3133688.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';
  const testArray = [1,2];
  return(
    <div id="post">
      <div className="post__header">
        <img src={post.userIcon} />
        <div className="post__username__and__options">
          <div className="post__username">
            {post.username}
          </div>
          <div className="post__options">
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>
      </div>
      <div className="post__image" style={{background: `url('${post.image}'`}} >
      </div>
      <div className="post__actions">
        <div className="post__left_actions">
          <i class="far fa-heart"></i>
          <i class="far fa-comment"></i>
          <i class="fas fa-share-alt"></i>
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
          <div className="post__poster_username">
            aaron.shines
          </div>
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
          {testArray.map( comment => {
            return(
              <div className="post__comment">
                <div className="post__commenter_username">
                james.malroy
                </div>
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