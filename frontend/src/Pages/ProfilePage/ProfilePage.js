import React from 'react';
import { Link } from 'react-router-dom';
import './ProfilePage.scss';

const ProfilePage = () => {
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

              <Link to="/accounts/edit" className="profilePage__editProfileBtnWrapper">
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
                <span role="img" aria-label="libra">♎️</span> Always Stay True To Your Self
                <br />
                <span role="img" aria-label="magic">✨</span> Optimist
                <br />
                <span role="img" aria-label="computer">💻</span> Software Engineer/Developer
                <br />
                <span role="img" aria-label="pin">📍</span> NY
              </div>
              
              <div className="profilePage__userWebsite">
                <a className="profilePage__userWebsiteATag" href="https://www.aaronoquendo.com" target="_blank" rel="noopener noreferrer">aaronoquendo.com</a>
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
            <i className="fas fa-th"></i>
            <span className="profilePage__span">Posts</span>
          </div>
          <div className="profilePage__contentTab">
            <i className="fas fa-tv"></i>
            <span className="profilePage__span">IGTV</span>
          </div>
          <div className="profilePage__contentTab">
            <i className="fas fa-bookmark"></i>
            <span className="profilePage__span">Saved</span>
          </div>
          <div className="profilePage__contentTab">
            <i className="fas fa-user-tag"></i>
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
                    <i className="fas fa-heart"></i>
                    <span className="profilePage__postHoverStatCount">
                      136
                    </span>
                  </div>

                  <div className="profilePage__postHoverStat">
                    <i className="fas fa-heart"></i>
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