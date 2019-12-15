import React from 'react';
import { Link } from 'react-router-dom';
import './ProfilePage.scss';
import postImage from '../../assets/images/nature-red-forest-leaves.jpg';

const ProfilePage = () => {
  const testArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];

  return(
    <div id="profilePage">
      <div className="profilePage__inner container">
        <div className="profilePage__profileTop">
          
          <div className="profilePage__userAvatar">
            <img src="https://instagram.fewr1-5.fna.fbcdn.net/v/t51.2885-19/s320x320/10623878_1553256358327908_1220634201_a.jpg?_nc_ht=instagram.fewr1-5.fna.fbcdn.net&oh=17287da2fd9ab631c1a560749bd34e2e&oe=5E71AB60" alt=""/>
          </div>

          <div className="profilePage__userInfo">
            <div className="profilePage__userInfoTop">
              <div className="profilePage__userName">
                aaron.shines
              </div>

              <Link className="profilePage__editProfileBtnWrapper">
                <div className="profilePage__editProfileBtn">Edit Profile</div>
              </Link>
              
              <div className="profilePage__settingsBtn">
                <i className="fas fa-cog"></i>
              </div>
            </div>

            <div className="profilePage__userInfoMiddle">
              <div className="profilePage__postCount profilePage__stats">
                <span className="profilePage__countNumber">29</span>
                <span className="profilePage__countText">posts</span>
              </div>

              <div className="profilePage__followerCount profilePage__stats">
                <span className="profilePage__countNumber">556</span>
                <span className="profilePage__countText">followers</span>
              </div>
              
              <div className="profilePage__followingCount profilePage__stats">
                <span className="profilePage__countNumber">759</span>
                <span className="profilePage__countText">following</span>
              </div>

            </div>

            <div className="profilePage__userInfoBottom">

              <div className="profilePage__userNickname">

              </div>

              <div className="profilePage__userBio">
                ♎️ Always Stay True To Your Self
                <br />
                ✨ Optimist
                <br />
                💻 Software Engineer/Developer
                <br />
                📍 NY
              </div>
              
              <div className="profilePage__userWebsite">
                <a class="profilePage__userWebsiteATag" href="https://www.aaronoquendo.com" target="_blank">aaronoquendo.com</a>
              </div>

            </div>
          </div>
        </div>

        <div className="profilePage__userStories">
            {[1,2,3].map( (item, index) => {
                return(
                  <div className="profilePage__userStory" key={index}>
                  <div className="profilePage__userStoryImageWrapper">
                    <img src="https://instagram.fewr1-5.fna.fbcdn.net/v/t51.2885-19/s320x320/10623878_1553256358327908_1220634201_a.jpg?_nc_ht=instagram.fewr1-5.fna.fbcdn.net&oh=17287da2fd9ab631c1a560749bd34e2e&oe=5E71AB60" alt=""/>
                    <span className="profilePage__userStoryTitle">Gratitude</span>
                  </div>
                </div>
                )
              }
            )}

          </div>


        <div className="profilePage__contentBar">
          <div className="profilePage__contentTab profilePage__contentTab--selected">
            <i class="fas fa-th"></i>
            <span className="profilePage__span">Posts</span>
          </div>
          <div className="profilePage__contentTab">
            <i class="fas fa-tv"></i>
            <span className="profilePage__span">IGTV</span>
          </div>
          <div className="profilePage__contentTab">
            <i class="fas fa-bookmark"></i>
            <span className="profilePage__span">Saved</span>
          </div>
          <div className="profilePage__contentTab">
            <i class="fas fa-user-tag"></i>
            <span className="profilePage__span">Tagged</span>
          </div>
        </div>

        <div className="profilePage__postGrid">
          {[1,2,3,4,5,6].map( (item, index) => {
            return(
              <div className="profilePage__postGridItem" key={index}>
                <img className="profilePage__userPost" src="https://i.ibb.co/j8nmwHn/nature-red-forest-leaves.jpg" alt=""/>
                <div className="profilePage__postGridItemHoverDiv">
                  <div className="profilePage__postHoverStat">
                    <i class="fas fa-heart"></i>
                    <span className="profilePage__postHoverStatCount">
                      136
                    </span>
                  </div>

                  <div className="profilePage__postHoverStat">
                    <i class="fas fa-heart"></i>
                    <span className="profilePage__postHoverStatCount">
                      63
                    </span>
                  </div>
                </div>
              </div>
            )
          })}

        </div>

      </div>
    </div>
  );
}
export default ProfilePage;