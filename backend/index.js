const mongoDB = require("mongoose");
const express = require("express");

const mongoUrl =
  "mongodb+srv://egisgajo28:<password>@tdelight.nviod29.mongodb.net/?retryWrites=true&w=majority&appName=tdeLight";

const app = express();

app.get("/", (req, res) => {});

mongoDB.connect(mongoUrl);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://egisgajo28:<password>@tdelight.nviod29.mongodb.net/?retryWrites=true&w=majority&appName=tdeLight";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

