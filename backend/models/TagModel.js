export default (sequelize, DataTypes) => {
  const TagModel = sequelize.define('tag', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    },
    {
      tableName: 'tags',
      freezeTableName: true,
    });

    TagModel.associate = (models) => {
      TagModel.belongsToMany(models.PostModel, {
        through: models.PostTagModel,
        foreignKey: 'tagId'
      });
    };

  return TagModel;
};