const {MongoClient} = require('mongodb');

const url = 'mongodb+srv://tipiwip898:gq5oW10ouKTDOwHh@nodejs.kjwawid.mongodb.net/'
const client = new MongoClient(url);
const dbName = 'Hello_World';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('Users');

const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

