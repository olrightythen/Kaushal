const Professional = (sequelize, DataTypes) => sequelize.define(
  "Professional",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
    },
    skills: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    employment_type: {
      type: DataTypes.ENUM("full-time", "part-time"),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      allowNull: false,
      defaultValue: "active",
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "professionals",
    timestamps: false,
  }
);

module.exports = Professional;
