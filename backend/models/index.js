const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../config/dbConfig");

// Initialize Sequelize instance
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    logging: false, // Disable Sequelize logging (optional)
  }
);

// Test database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1); // Exit process if database connection fails
  }
})();

// Models initialization
const MakeUserModel = require("./UserModel");
const MakeBookingModel = require("./BookingModel");
const MakeProfessionalModel = require("./ProfessionalModel");
const MakeSubmittedProfessionalModel = require("./SubmittedProfessionalModel");

const db = {
  Sequelize,
  sequelize,
  users: MakeUserModel(sequelize, DataTypes),
  bookings: MakeBookingModel(sequelize, DataTypes),
  professionals: MakeProfessionalModel(sequelize, DataTypes),
  submittedProfessionals: MakeSubmittedProfessionalModel(sequelize, DataTypes),
};

// Sync database models
(async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Database synchronized.");
  } catch (error) {
    console.error("Error during synchronization:", error);
  }
})();

// Define associations here
db.bookings.belongsTo(db.users, { foreignKey: "user_id" });
db.users.hasMany(db.bookings, { foreignKey: "user_id" });

module.exports = db;
