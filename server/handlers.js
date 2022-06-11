"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);
const dbName = "aegis";

const { v4: uuidv4 } = require("uuid");

// const { users, articles } = require("./data");

//======================================================================

const getArticles = async (req, res) => {
  await client.connect();
  console.log("connected!");

  const db = client.db(dbName);

  const result = await db.collection("articles").find().toArray();

  result
    ? res.status(200).json({ status: 200, data: result })
    : res.status(400).json({ status: 400, message: "articles not available" });
  console.log("disconnected!");
  // client.close();
};
//======================================================================

const getArticle = async (req, res) => {
  const articleId = req.params.id;

  await console.log(articleId);

  await client.connect();
  console.log("connected!");

  const db = client.db(dbName);

  const result = await db.collection("articles").findOne({ id: articleId });

  result
    ? res.status(200).json({ status: 200, data: result })
    : res.status(400).json({ status: 400, message: "article not available" });
  console.log("disconnected!");
  // client.close();
};
//======================================================================

const getUsers = async (req, res) => {
  await client.connect();
  console.log("connected!");

  const db = client.db(dbName);

  const result = await db.collection("users").find().toArray();

  result
    ? res.status(200).json({ status: 200, data: result })
    : res.status(400).json({ status: 400, message: "users not available" });
  console.log("disconnected!");
  // client.close();
};

// ======================================================================
const connectUser = async (req, res) => {
  const user = req.body;
  const userKey = user.publicKey;

  await client.connect();
  console.log("connected!");

  const db = client.db(dbName);

  const result = await db.collection("users").findOne({ publicKey: userKey });

  if (!result) {
    const insert = await db.collection("users").insertOne(user);
  }

  result
    ? res
        .status(200)
        .json({ status: 200, data: result, message: "user returning" })
    : res
        .status(200)
        .json({ status: 200, data: result, message: "new user registered" });
  console.log("disconnected!");
  // client.close();
};

// ======================================================================

const publishArticle = async (req, res) => {
  const newArticle = req.body;
  const id = uuidv4();
  newArticle.id = id;

  console.log(newArticle);

  await client.connect();
  console.log("connected!");

  const db = client.db(dbName);

  const insert = await db.collection("articles").insertOne(newArticle);
  const result = await db.collection("articles").findOne({ id: id });

  result
    ? res
        .status(200)
        .json({ status: 200, data: newArticle, message: "article saved!" })
    : res.status(400).json({ status: 400, message: "couldnt publish article" });
  console.log("disconnected!");
  // client.close();
};

module.exports = {
  getArticles,
  getUsers,
  connectUser,
  getArticle,
  publishArticle,
};
