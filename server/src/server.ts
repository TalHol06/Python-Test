import express from 'express';
import path from 'path';
import db from './config/connection.js';
import routes from './routes/index.js';
import cors from 'cors';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;

// const corsOptions = {
//   origin: ['https://python-test-frontend.onrender.com', 'http://localhost:3000'],
//   methods: ['GET', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// };

// app.use(cors(corsOptions));
// app.options('*', cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serves static files in the entire client's dist folder
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(routes);

db.once('open', () => {
  app.listen(port, () => console.log(`🌍 Now listening on localhost:${port}`));
});
