import sequelize from './sequelize.js';

async function initializeDb() {
  try {
    await sequelize.sync();
    console.log('Database synced');
  } catch (error) {
    console.error('Unable to sync database:', error);
  }
}

// Export the function for use in other files
export { initializeDb };
