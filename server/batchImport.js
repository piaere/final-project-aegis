const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

console.log(MONGO_URI)

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { users, articles } = require("./data");

const batchImport = async () => {
  
  const client = new MongoClient(MONGO_URI, options);
  console.log("client")
  try {
    const dbName = "aegis";
    console.log(dbName)
    await client.connect();
    console.log("connected!");

    const db = client.db(dbName);
    // const resultUsers = await db.collection("users").insertMany(users);

    const resultArticles = await db.collection("articles").insertMany(articles);

    console.log("resultUsers", resultUsers);
    console.log("resultArticles", resultArticles);
  } 
  catch (err) {
    console.log(err.stack);
  }
  finally{

    client.close();

  }

  console.log("disconnected!");
};

batchImport();
