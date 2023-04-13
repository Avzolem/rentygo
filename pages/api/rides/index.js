//RIDES ENDPOINT
import nc from "next-connect";
import clientPromise from "@/lib/mongodb";
import ncoptions from "@/config/ncoptions";
import { dateNowUnix } from "@/utils/dates";
import hardwareactions from "@/lib/hardwareactions";

const handler = nc(ncoptions); //middleware next conect handler

//MIDDLEWARE
handler.use(async (req, res, next) => {
  try {
    const client = await clientPromise;
    req.db = client.db();
    next();
  } catch (error) {
    console.error("Error connecting to DB in /api/users:", error);
    res.status(500).end("Error connecting to DB");
  }
});

//GET RIDES
handler.get(async (req, res) => {
  const { db } = req;
  //params piblicKey

  try {
    //get ride info
    const rides = await db.collection("rides").find({}).toArray();
    res.json({
      rides,
    });
  } catch (error) {
    console.error("Error getting ride info:", error);
    res.status(500).end("Error getting ride info");
  }
});

//NEW RIDE
handler.post(async (req, res) => {
  try {
    const { db } = req;
    //get carid, publicKey
    const { carId, publicKey } = req.body;

    console.log("carId =>", carId);
    console.log("publicKey =>", publicKey);

    //checks if a car exists and is not in use
    const car = await db.collection("cars").findOne({ id: carId });
    console.log("car =>", car);
    if (!car) {
      console.error("car does not exist");
      res.status(500).end(`Sorry, This car does not existsx 😢`);
      return;
    }

    //check if car is in use.
    const inUse = await db
      .collection("rides")
      .findOne({ carId, status: "inuse" });

    if (inUse) {
      console.error("car is in use");
      res.status(400).end(`Sorry, Selected Car is in use 😢`);
      return;
    }

    //create new default ride
    const newRide = {
      carId,
      publicKey,
      status: "inuse",
      startUnix: dateNowUnix(),
    };

    const savedRide = await db.collection("rides").insertOne(newRide);

    //hardware on
    try {
      hardwareactions.startmotor();
    } catch (error) {
      console.error("Error turning on hardware:", error);
      res.status(500).end(`Sorry, An error occurred 😢`);
    }

    res.json({
      ...car,
      success: true,
      rideId: savedRide.insertedId,
    });
  } catch (error) {
    console.error("Error creating new ride:", error);
    res.status(500).end(`Sorry, An error occurred 😢`);
  }
});

export default handler;
