const institutions = require('./institutions.json');
const submissions = require('./submissions.json');
const mongoose =  require('mongoose');

mongoose.connect('mongodb://localhost/theapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (err) => {
    console.error('Mongo connection error (ensure a "theapi" db is present):', err);
    process.exit(1);
});
db.once('open', async () => {
  console.log('Mongo connection has been estabilished.');
  try {
    await db.collection('institutions').drop();
    await db.collection('submissions').drop();
  } catch {
    console.log('Collections not present, creating with demo data.')
  }
  try {
    console.log('Adding data to collections...')
    await db.collection('institutions').insertMany(institutions);
    await db.collection('submissions').insertMany(submissions);
    console.log('\nSetup complete, please run "npm run dev" to start the API.\n')
  } catch (err) {
    console.error(err)
  }
  db.close();
});
