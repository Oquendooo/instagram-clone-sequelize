export default (sequelize, DataTypes) => {
  const CommentModel = sequelize.define('comment', {
      id: {
        primaryKey: true,
        type: DataTypes.TEXT,
        allowNull: false
      },
      postId: {
        type: DataTypes.DATE
      },
      userId: {
        type: DataTypes.DATE
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    },
    {
      tableName: 'comments',
      freezeTableName: true,
    });

    CommentModel.associate = (models) => {
      
    };

  return CommentModel;
};