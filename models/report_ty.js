/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const report_ty = sequelize.define('report_ty', {
    Country: {
      primaryKey:true,
      type: DataTypes.TEXT,
      allowNull: true
    },
    HappinessRank: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    HappinessScore: {
      type: "DOUBLE",
      allowNull: true
    },
    WhiskerHigh: {
      type: "DOUBLE",
      allowNull: true
    },
    WhiskerLow: {
      type: "DOUBLE",
      allowNull: true
    },
    GDP: {
      type: "DOUBLE",
      allowNull: true
    },
    Family: {
      type: "DOUBLE",
      allowNull: true
    },
    LifeExpectancy: {
      type: "DOUBLE",
      allowNull: true
    },
    Freedom: {
      type: "DOUBLE",
      allowNull: true
    },
    Generosity: {
      type: "DOUBLE",
      allowNull: true
    },
    TrustGovernmentCorruption: {
      type: "DOUBLE",
      allowNull: true
    },
    DystopiaResidual: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
      freezetablenames: true,
      timestamps: false,
      tableName: 'report_ty'
    });
  return report_ty;
};
