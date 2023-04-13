//RIDES ENDPOINT
import nc from "next-connect";
import clientPromise from "@/lib/mongodb";
import ncoptions from "@/config/ncoptions";
import { dateNowUnix } from "@/utils/dates";
import hardwareactions from "@/lib/hardwareactions";

const { ObjectId } = require("mongodb"); // this is for converting strings to ObjectIds
const ratePerMinute = 0.5; //Rate in usd per minute

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

//GET RIDE
handler.get(async (req, res) => {
  const { db } = req;
  const { id } = req.query;

  console.log("ID =>", id);

  try {
    //get ride info
    const ride = await db
      .collection("rides")
      .findOne({ _id: new ObjectId(id) });

    const car = await db.collection("cars").findOne({ id: ride.carId });

    res.json({
      car,
      ride,
    });
  } catch (error) {
    console.error("Error getting ride info:", error);
    res.status(500).end("Error getting ride info");
  }
});

//ends ride
handler.delete(async (req, res) => {
  const { db } = req;
  const { id } = req.query;

  try {
    const endTime = dateNowUnix();

    //get difference in time
    const ride = await db
      .collection("rides")
      .findOne({ _id: new ObjectId(id) });

    const startTime = ride.startUnix;
    const timeDifferenceUnix = endTime - startTime;

    //calculate price
    const price = (timeDifferenceUnix * ratePerMinute) / 60;

    const { value } = await db.collection("rides").findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        $set: {
          endUnix: dateNowUnix(),
          status: "ended",
          price: price.toFixed(2),
        },
      },
      { returnOriginal: false }
    );

    //hardware off
    try {
      hardwareactions.turnoffcar();
    } catch (error) {
      console.error("Error turning on hardware:", error);
      res.status(500).end(`Sorry, An error occurred 😢`);
    }

    res.json(value);
  } catch (error) {
    console.error("Error ending ride:", error);
    res.status(500).end("Error ending ride");
  }
});

export default handler;
