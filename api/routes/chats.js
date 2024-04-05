
import express from 'express';
import got from 'got';
const router = express.Router();

// Mock data for demonstration
let chatData = [
  {
    'id': 1,
    'prompt': 'say hi',
    'response': `Hello there! How's your day going? Is there anything in particular you'd like to talk about or ask about? I'm here to help answer questions or engage in friendly conversation. Let me know if you have any requests! :)`,
    'model': 'mistralai/Mistral-7B-Instruct-v0.2',
    'tokens': 62,
    'duration': 3335
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
