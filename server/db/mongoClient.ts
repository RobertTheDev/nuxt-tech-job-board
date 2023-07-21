import { MongoClient } from 'mongodb';

// // Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// // Database Name
const dbName = 'Restaurant';

const mongoClient = client.db(dbName);

export default mongoClient;
