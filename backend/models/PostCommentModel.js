export default (sequelize, DataTypes) => {
  const PostCommentModel = sequelize.define('postComment', {
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      commentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    },
    {
      tableName: 'postComments',
      freezeTableName: true,
    });

    PostCommentModel.associate = (models) => {
      
    };

  return PostCommentModel;
};