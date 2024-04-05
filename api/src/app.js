import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  exposedHeaders: 'X-Total-Count',
}));
app.use(morgan('combined'));

// Import routes
import routeHealth from './routes/healthRoute.js';
import routeChats from './routes/chatRoute.js';
import routePoems from './routes/poemRoute.js';

// Use Routes
app.use('/healthz', routeHealth);
app.use('/chats', routeChats);
app.use('/poems', routePoems);

// Just to listen to /
app.get('/', (req, res) => {
  res.send({'ai-testing-api':'node'});
})

// Export the app
export default app;