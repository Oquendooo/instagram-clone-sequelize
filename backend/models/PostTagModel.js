export default (sequelize, DataTypes) => {
  const PostTagModel = sequelize.define('postTag', {
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      tagId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    },
    {
      tableName: 'postTags',
      freezeTableName: true,
    });

  return PostTagModel;
};