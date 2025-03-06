import express from 'express';
// import path from 'node:path';
import db from './config/connection.js';
import routes from './routes/index.js';
import cors from 'cors';
const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;
const corsOptions = {
    // origin: process.env.NODE_ENV === 'production'
    // ? 'https://python-test-frontend.onrender.com'
    // : 'http://localhost:3000',
    origin: ['https://python-test-frontend.onrender.com', 'http://localhost:3000'],
    methods: ['GET', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));
app.use(routes);
db.once('open', () => {
    app.listen(port, '0.0.0.0', () => console.log(`🌍 Now listening on localhost:${port}`));
});
