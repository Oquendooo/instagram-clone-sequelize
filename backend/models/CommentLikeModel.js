export default (sequelize, DataTypes) => {
  const CommentLikeModel = sequelize.define('commentLike', {
      commentId: {
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
      tableName: 'commentLikes',
      freezeTableName: true,
    });

    CommentLikeModel.associate = (models) => {
      
    };

  return CommentLikeModel;
};