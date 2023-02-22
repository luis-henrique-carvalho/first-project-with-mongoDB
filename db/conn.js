// const mongoose = require("mongoose");

// async function main() {
//   await mongoose.connect("mongodb://localhost:2707/testemongoose");
//   console.log("Conectou ao MongoDB como Mongoose!");
// }

// main().catch((err)=> console.log(err))

// module.exports = mongoose

const { MongoClient } = require("mongodb");
// Connection URI
const url = "mongodb://localhost:27017/testemongodb";
// Create a new MongoClient
const client = new MongoClient(url);
async function run() {
  try {
    await client.connect();
    console.log("Conectado ao MongoDB!");
  } catch (err) {
    console.log(err);
  }
}

run();

module.exports = client;
