'use strict';
module.exports = (sequelize, DataTypes) => {
  const Try = sequelize.define('Try', {
    name: DataTypes.STRING
  }, {});
  Try.associate = function(models) {
    // associations can be defined here
  };
  return Try;
};