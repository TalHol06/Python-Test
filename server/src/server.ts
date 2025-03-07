import express from 'express';
import db from './config/connection.js';
import routes from './routes/index.js';


const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Serves static files in the entire client's dist folder
if (process.env.NODE_ENV === 'production'){
  app.use(express.static((`../client/dist`)));
  // console.log(__dirname);
  app.get("*", (_req, res) => {
    res.sendFile(`../client/dist/index.html`)
  })
}

db.once('open', () => {
  app.listen(port, () => console.log(`🌍 Now listening on localhost:${port}`));
});
