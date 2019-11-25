export default (sequelize, DataTypes) => {
  const PostModel = sequelize.define('post', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    },
    {
      tableName: 'posts',
      freezeTableName: true,
    });

    PostModel.associate = (models) => {
      PostModel.belongsToMany(models.TagModel, {
        through: models.PostTagModel,
        foreignKey: 'postId'
      });
  };
  return PostModel;
};
