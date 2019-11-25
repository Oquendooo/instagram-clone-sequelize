export default (sequelize, DataTypes) => {
  const PostCommentModel = sequelize.define('postLike', {
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      userId: {
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
      tableName: 'postLikes',
      freezeTableName: true,
    });

    PostCommentModel.associate = (models) => {
      
    };

  return PostCommentModel;
};