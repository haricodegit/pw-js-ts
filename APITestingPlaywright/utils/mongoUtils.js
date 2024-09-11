const { MongoClient } = require('mongodb');

// Mongo DB connection URI
const uri = "mongodb://localhost:27017" // Replace with your Mongo DB URI

// DataBase and Collection Names
const dbName = "bookings";
const collectionName = "hotel";

// Function to connect to MongoDB and return the collection
async function connectToMongoDB() {
    // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const client = new MongoClient(uri, { monitorCommands: true });
    await client.connect();
    // console.log("connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    return {client, collection};
}

// Function to insert a single document into MongoDB

async function insertSingleDocument(singleDocument) {
    const { client, collection } = await connectToMongoDB();
    await collection.insertOne(singleDocument);
    // console.log('Document inserted');
    await client.close();
}

// Function to insert a Many document into MongoDB

async function insertManyDocuments(multipleDocuments) {
    const { client, collection } = await connectToMongoDB();
    await collection.insertMany(multipleDocuments)
    // console.log('Document inserted');
    await client.close();
}


// Function to fetch document from MongoDB
async function fetchDocuments(query) {
    const { client, collection } = await connectToMongoDB();
    // const documents = await collection.find(query).toArray();
    const documents = await collection.find(query).toArray();
    // console.log('Document fetched');
    await client.close();
    return documents;
}

module.exports = {
    insertSingleDocument,
    insertManyDocuments,
    fetchDocuments
};