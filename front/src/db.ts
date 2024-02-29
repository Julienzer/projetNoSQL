/* db.ts
import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017/';
// @ts-ignore
const client = new MongoClient(uri, { useUnifiedTopology: true });

export async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to the database');
    return client.db('stockManagement');
  } catch (error) {
    console.error('Error connecting to the database', error);
    throw error;
  }
}*/
