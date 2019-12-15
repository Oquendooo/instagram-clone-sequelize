import React from 'react';
import Post from '../../ResuableComponents/Post/Post';
import {Link} from 'react-router-dom';
import StoriesSection from '../../ResuableComponents/StoriesSection/StoriesSection';
import './FeedPage.scss';

//MockData
import mockData from '../../mockData/mockData.json'

const FeedPage = () => {

  // const handleWindowWidthChange = () => { 
  //     const width = window.innerWidth;
  //     console.log("var w = window.innerWidth;", width);
  //     setRightSectionPostion(rightSectionPostion-2);
  //     if (1 >= 60) {

  //       // rightSection.classList.add('feedPage__rightSection--fixed');
  //     } else {
      
  //       // rightSection.classList.remove('feedPage__rightSection--fixed');
  //     }
  // }
  // window.onresize = handleWindowWidthChange;

  return(
    <div id="feedPage">
      <div className="feedPage__inner container">
        <div className="feedPage__posts">
          {mockData.map( (post, index) => {
            return(
              <Post post={post} key={index} />
            );
          })}
        </div>
        <div className="feedPage__rightSection" >
          <div className="feedPage_userInfo">
            <Link to="/profile">
              <img src="https://images.unsplash.com/photo-1506085452766-c330853bea50?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3e378252a934e660f231666b51bd269a" alt=""/>
            </Link>

            <div className="feedPage_username_and_nickname">
              <Link to="/profile">
                <div className="feedPage_username">
                  aaron.shines
                </div>
              </Link>
              <div className="feedPage_nickname">
                Aaron
              </div>
            </div>
        
          </div>
          <StoriesSection />
        </div>
      </div>
    </div>
  );
}
export default FeedPage;