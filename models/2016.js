/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('2016', {
    Country: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Region: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Happiness Rank: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Happiness Score: {
      type: "DOUBLE",
      allowNull: true
    },
    Lower Confidence Interval: {
      type: "DOUBLE",
      allowNull: true
    },
    Upper Confidence Interval: {
      type: "DOUBLE",
      allowNull: true
    },
    Economy (GDP per Capita): {
      type: "DOUBLE",
      allowNull: true
    },
    Family: {
      type: "DOUBLE",
      allowNull: true
    },
    Health (Life Expectancy): {
      type: "DOUBLE",
      allowNull: true
    },
    Freedom: {
      type: "DOUBLE",
      allowNull: true
    },
    Trust (Government Corruption): {
      type: "DOUBLE",
      allowNull: true
    },
    Generosity: {
      type: "DOUBLE",
      allowNull: true
    },
    Dystopia Residual: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: '2016'
  });
};
