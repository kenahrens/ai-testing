import express from 'express';
import cors from 'cors';
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  exposedHeaders: 'X-Total-Count',
}));

// Import routes
import routeHealth from './routes/health.js';
import routeChat from './routes/chats.js';

// Use Routes
app.use('/healthz', routeHealth);
app.use('/chats', routeChat);

// Just to listen to /
app.get('/', (req, res) => {
  res.send({'ai-testing-api':'node'});
})

// Export the app
export default app;