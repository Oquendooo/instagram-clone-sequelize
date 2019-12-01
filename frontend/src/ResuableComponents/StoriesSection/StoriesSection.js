import React from 'react';
import './StoriesSection.scss';

const StoriesSection = () => {
  const testArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];

  return(
    <div id="storiesSection">
      <div className="storiesSection__inner">
        <div className="storiesSection__header">
          <div className="storiesSection__title">
            Stories
          </div>

          <div className="storiesSection__watchAll">
            Watch All
          </div>

        </div>

        <div className="storiesSection__userStories">
          {testArray.map( userStory => {
            return(
              <div className="storiesSection__userStory">
                <img src="https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13-200w.jpeg" alt=""/>
                <div className="storiesSection__username_and_time">
                  <div className="storiesSection__username">
                    jane.bell.may
                  </div>
                  <div className="storiesSection__time">
                    35 minutes ago  
                  </div>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}
export default StoriesSection;