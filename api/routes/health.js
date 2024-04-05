import express from 'express';
const router = express.Router();

// Define routes
router.get('/', (_, res) => {
  const body = {
    health: 'y'
  }
  res.send(body);
});

// Export the router
export default router;
