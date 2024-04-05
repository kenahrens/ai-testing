import { Sequelize } from 'sequelize';

// Setup a new database
// using database credentials set in .env
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './data/database.sqlite', // Path to database file
});

export default sequelize;
