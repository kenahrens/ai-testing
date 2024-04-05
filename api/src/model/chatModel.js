import { DataTypes } from 'sequelize';
import sequelize from '../db/sequelize.js';

const ChatModel = sequelize.define('ChatModel', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  prompt: { type: DataTypes.TEXT },
  content: { type: DataTypes.JSON },
  model: { type: DataTypes.TEXT },
  max_tokens: { type: DataTypes.INTEGER },
  prompt_tokens: { type: DataTypes.INTEGER },
  completion_tokens: { type: DataTypes.INTEGER },
  total_tokens: { type: DataTypes.INTEGER },
  duration: { type: DataTypes.INTEGER },
}, {
  // Other model options go here
  timestamps: false
});

export default ChatModel;
