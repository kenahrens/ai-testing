
import express from 'express';
import PoemModel from '../model/poemModel.js';
import apiClient from '../api/apiClient.js';

const router = express.Router();

function jsonToModel(jsonData, prompt, max_tokens, tDuration) {
  var poem = jsonData.choices[0].message.content;
  return {
    'prompt': prompt,
    'max_tokens': max_tokens,
    'poem': poem,
    'model': jsonData.model,
    'votes': 1,
    'prompt_tokens': jsonData.usage.prompt_tokens,
    'completion_tokens': jsonData.usage.completion_tokens,
    'total_tokens': jsonData.usage.total_tokens,
    'duration': tDuration,
  }
}

// Create operation
router.post('/', async (req, res) => {
  const reqBody = req.body;
  if (reqBody !== null && reqBody.prompt !== null) {
    // Call the chat completions API
    const tStart = Date.now();
    const prompt = reqBody.prompt;

    // Check the tokens they sent (if any)
    const max_tokens = reqBody.max_tokens | process.env.MAX_TOKENS;

    // Call the API
    const jsonData = await apiClient.chatCompletions(reqBody.prompt, max_tokens);
    const tDuration = Date.now() - tStart;
    
    // Convert to model
    const modelData = jsonToModel(jsonData, prompt, max_tokens, tDuration);
    await PoemModel.create(modelData);
    res.status(201).send(modelData);
  } else {
    res.status(500).send({'error': 'invalid input'});
  }
});

// Read operation (all items)
router.get('/', async (req, res) => {
  const data = await PoemModel.findAll();
  // Set the X-Total-Count header with the number of items
  res.set('X-Total-Count', data.length);
  res.status(200).json(data);
});

// Read operation (single item by id)
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const entity = await PoemModel.findByPk(id)
  if (entity) {
    res.status(200).json(entity);
  } else {
    res.status(404).send({});
  }
});

// Delete operation
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const entity = await PoemModel.findByPk(id)
  if (entity) {
    await entity.destroy();
    res.status(204).send(); // No content to send back
  } else {
    res.status(404).send({});
  }
});

// Export the router
export default router;
