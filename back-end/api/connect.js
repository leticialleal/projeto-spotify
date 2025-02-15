import { MongoClient } from 'mongodb'

const URI = 'mongodb+srv://leticia:flof123@cluster0.642tv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(URI);

export const db = client.db('projeto-spotify');

// node ./api/connect.js

// const songCollection = await db.collection('songs').find({}).toArray();

