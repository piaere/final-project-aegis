const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { users, articles, draft } = require("./data");


let flightsIDArray = [];

Object.keys(flights).forEach((flightID) => {
  flightsIDArray.push({ flight: flightID, seats: flights[flightID] });
});

const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options);
  const dbName = "slingair";

  try {
    await client.connect();
    console.log("connected!");

    const db = client.db(dbName);
    const resultFlights = await db
      .collection("flights")
      .insertMany(flightsIDArray);
    const flightsArray = await db.collection("flights").find().toArray();

    const resultReservations = await db
      .collection("reservations")
      .insertMany(reservations);
    const ReservationsArray = await db
      .collection("reservations")
      .find()
      .toArray();

    console.log("flightsArray", flightsArray);
    console.log("ReservationsArray", ReservationsArray);
  } catch (err) {
    console.log(err.stack);
  }

  client.close();
  console.log("disconnected!");
};

batchImport();
