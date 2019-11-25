export default (sequelize, DataTypes) => {
  const UserFollowModel = sequelize.define('userFollow', {
      followerId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      followeeId: {
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
      tableName: 'userFollows',
      freezeTableName: true,
    });

    UserFollowModel.associate = (models) => {
      
    };

  return UserFollowModel;
};