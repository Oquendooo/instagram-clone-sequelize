import Sequelize from 'sequelize';
import sequelize from '../config/database';

let db = {
  UserModel: sequelize.import('./UserModel'),
  PostModel: sequelize.import('./PostModel'),
  CommentModel: sequelize.import('./CommentModel'),
  TagModel: sequelize.import('./TagModel'),

  // Join tables
  CommentLikeModel: sequelize.import('./CommentLikeModel'),
  PostCommentModel: sequelize.import('./PostCommentModel'),
  PostLikeModel: sequelize.import('./PostLikeModel'),
  PostTagModel: sequelize.import('./PostTagModel'),
  UserFollowModel: sequelize.import('./UserFollowModel'),
  UserPostModel: sequelize.import('./UserPostModel'),
};

Object.keys(db).forEach(modelName => {
  if(db[modelName].associate){
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// console.log("db",db);
export default db;
