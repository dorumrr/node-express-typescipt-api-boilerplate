import app from './app';
import mongoose from 'mongoose';
const port = app.get('port');
const nodeEnv = process.env.NODE_ENV || 'default';

mongoose.connect('mongodb://localhost/theapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', err => {
  console.error('Mongo connection error (ensure a "theapi" db is present):', err)
  process.exit(1);
});
db.once('open', () => {
  console.log('Mongo connection has been estabilished.')
});

const server = app.listen(port, () => {
  console.log(`API is listening on port ${port}, NODE_ENV: ${nodeEnv}`);
});

export default server;