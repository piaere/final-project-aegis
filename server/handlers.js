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

const { users, articles, draft } = require("./data");

//======================================================================

const getUsers = async (req, res) => {
    await client.connect();
    console.log("connected!");
  
    const db = client.db(dbName);
  
    const result = await db.collection("users").find().toArray();
  
    result
      ? res.status(200).json({ status: 200, data: result })
      : res.status(400).json({ status: 400, message: "users not available" });
    client.close();
    console.log("disconnected!");
  };

  //======================================================================

const getUser = async (req, res) => {
    const user0x = req.params.user0x;
  
    await client.connect();
    console.log("connected!");
  
    const db = client.db(dbName);
  
    const result = await db
      .collection("users")
      .findOne({ flight: flightNumber });
  
    result
      ? res.status(200).json({ status: 200, data: result.seats })
      : res.status(400).json({
          status: 400,
          req: flightNumber,
          message: "flight not available",
        });
    client.close();
    console.log("disconnected!");
  };
