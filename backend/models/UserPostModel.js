export default (sequelize, DataTypes) => {
  const UserPostModel = sequelize.define('userPosts', {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      postId: {
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
      tableName: 'userPosts',
      freezeTableName: true,
    });

    UserPostModel.associate = (models) => {
      
    };

  return UserPostModel;
};