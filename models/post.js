'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    userId: DataTypes.INTEGER,
    photo: DataTypes.STRING,
    caption: DataTypes.STRING
  }, {});
  post.associate = function(models) {
    // associations can be defined here
    post.belongsTo(models.user)
  };
  return post;
};