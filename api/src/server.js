import 'global-agent/bootstrap.js';
import 'dotenv/config';
import app from './app.js'; // Note the '.js' extension
import { initializeDb } from './db/database.js';

const port = process.env.PORT || 8080;

initializeDb().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
