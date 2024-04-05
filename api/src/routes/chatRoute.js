
import express from 'express';
import got from 'got';
const router = express.Router();

// Mock data for demonstration
let chatData = [
  {
    'id': 1,
    'prompt': 'say hi',
    'response': `Hello! How's your day going? Is there anything specific you'd like to talk about or ask me a question about? I'm here to help answer any questions you might have to the best of my ability. Let me know if you need any assistance.`,
    'model': 'mistralai/Mistral-7B-Instruct-v0.2',
    'tokens': 67,
    'duration': 3683
  },
  {
    'id': 2,
    'prompt': 'welcome a user to the app',
    'response': `Hello and welcome to our app! I'm glad you've decided to join us. I'm here to help answer any questions you may have and guide you through the features of the app. Please feel free to explore and let me know if there's anything specific you'd like to know or if you have any feedback. Let's get started on a great experience together!`,
    'model': 'mistralai/Mistral-7B-Instruct-v0.2',
    'tokens': 96,
    'duration': 5244
  }
];

// Create operation
router.post('/', (req, res) => {
  const newEntity = req.body; // In real app, validate this input
  chatData.push(newEntity);
  res.status(201).send(newEntity);
});

// Read operation (all items)
router.get('/', (req, res) => {
  // Set the X-Total-Count header with the number of items
  res.set('X-Total-Count', chatData.length);
  res.status(200).json(chatData);
});

// Read operation (single item by id)
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const numericId = parseInt(id, 10);
  const entity = chatData.find(item => item.id === numericId);
  if (entity) {
    res.status(200).json(entity);
  } else {
    res.status(404).send({});
  }
});

// Update operation
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const numericId = parseInt(id, 10);
  const index = chatData.findIndex(item => item.id === numericId);
  if (index > -1) {
    chatData[index] = { ...chatData[index], ...req.body };
    res.status(200).json(chatData[index]);
  } else {
    res.status(404).send({});
  }
});

// Delete operation
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const numericId = parseInt(id, 10);
  const index = chatData.findIndex(item => item.id === numericId);
  if (index > -1) {
    chatData.splice(index, 1);
    res.status(204).send(); // No content to send back
  } else {
    res.status(404).send({});
  }
});

// Export the router
export default router;
