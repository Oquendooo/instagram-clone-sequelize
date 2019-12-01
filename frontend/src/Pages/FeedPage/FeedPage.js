import React, { useState } from 'react';
import Post from '../../ResuableComponents/Post/Post';
import StoriesSection from '../../ResuableComponents/StoriesSection/StoriesSection';
import './FeedPage.scss';

//MockData
import mockData from '../../mockData/mockData.json'

const FeedPage = () => {
  const testArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
  let shuffledMockData = [...mockData].sort(() => Math.random() - 0.5 );

  const [rightSectionPostion,setRightSectionPostion] = useState(1015);
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
          {mockData.map( (post) => {
            return(
              <Post post={post} />
            );
          })}
        </div>
        <div className="feedPage__rightSection" >
          <div className="feedPage_userInfo">
            
            <img src="https://images.unsplash.com/photo-1506085452766-c330853bea50?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3e378252a934e660f231666b51bd269a" alt=""/>

            <div className="feedPage_username_and_nickname">
              <div className="feedPage_username">
                aaron.shines
              </div>
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