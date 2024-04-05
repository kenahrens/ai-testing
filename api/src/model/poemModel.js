import { DataTypes } from 'sequelize';
import sequelize from '../db/sequelize.js';

const PoemModel = sequelize.define('PoemModel', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  prompt: { type: DataTypes.TEXT },
  poem: { type: DataTypes.JSON },
  model: { type: DataTypes.TEXT },
  votes: { type: DataTypes.INTEGER },
  max_tokens: { type: DataTypes.INTEGER },
  prompt_tokens: { type: DataTypes.INTEGER },
  completion_tokens: { type: DataTypes.INTEGER },
  total_tokens: { type: DataTypes.INTEGER },
  duration: { type: DataTypes.INTEGER },
}, {
  // Other model options go here
  timestamps: false
});

export default PoemModel;
