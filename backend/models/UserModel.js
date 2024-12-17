const MakeUserModel = (sequelize, DataTypes) => {
  return sequelize.define("user", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    bookings: {
      type: DataTypes.INTEGER, 
      defaultValue: 0 
    },
  });
};

module.exports = MakeUserModel;
