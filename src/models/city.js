'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  City.init({
    name: {
     type: DataTypes.STRING,
     allowNull: false,
     unique: true
    }

  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};

//🔹 Example Flow of Creating a Table Using Sequelize CLI - refered from ChatGPT.
// 1️⃣ Generate a model and migration file:

// sh
// Copy
// Edit
// npx sequelize-cli model:generate --name User --attributes name:string,email:string
// ✅ This creates:

// A model file (models/user.js) → Defines the structure in JavaScript.
// A migration file (migrations/YYYYMMDDHHMMSS-create-user.js) → Defines the SQL schema changes.
// 2️⃣ Run migrations to create the table in the database:

// sh
// Copy
// Edit
// npx sequelize db:migrate
// ✅ This executes the SQL commands from the migration file and creates the Users table in the DB.