import React from 'react';
import './Post.scss';

const Post = () => {
  
  const image = 'https://images.pexels.com/photos/3133688/pexels-photo-3133688.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';

  return(
    <div id="post">
      <div className="post__header">
        <img src="https://pbs.twimg.com/profile_images/953000038967468033/n4Ngwvi7.jpg" />
        <div className="post__username__and__options">
          <div className="post__username">
            aaron.shines
          </div>
          <div className="post__options">
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>
      </div>
      <div className="post__image" style={{background: `url('${image}'`}} >
        {/* <img src="" alt=""/> */}
      </div>
      <div className="post__actions">
        <div className="post__left_actions">
          <i class="far fa-heart"></i>
          <i class="far fa-comment"></i>
          <i class="fas fa-share-alt"></i>
        </div>
        <div className="post__right_actions">
          <i class="far fa-bookmark"></i>
        </div>
      
      </div>
      <div className="post__engagement">
        
      </div>
      <div className="post__comment_input">
        
      </div>
    </div>
  );
}
export default Post;