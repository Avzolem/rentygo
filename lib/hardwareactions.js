import axios from "axios";

const hardwareactions = {};
const ADAFRUIT_API_KEY = process.env.ADAFRUIT_API_KEY;

hardwareactions.startmotor = async () => {
  await axios
    .post(
      `https://io.adafruit.com/api/v2/rnajera/feeds/led1/data`,
      {
        value: "3",
      },
      {
        headers: {
          "X-AIO-Key": ADAFRUIT_API_KEY,
        },
      }
    )
    .then(
      (response) => {
        console.log("Este es el result.data =>  ", response);
      },
      (error) => {
        console.log("Error al enviar post al api de Adafruit", error);
      }
    );
};
hardwareactions.turnoffcar = async () => {
  await axios
    .post(
      `https://io.adafruit.com/api/v2/rnajera/feeds/led1/data`,
      {
        value: "4",
      },
      {
        headers: {
          "X-AIO-Key": ADAFRUIT_API_KEY,
        },
      }
    )
    .then(
      (response) => {
        console.log("Este es el result.data =>  ", response);
      },
      (error) => {
        console.log("Error al enviar post al api de Adafruit", error);
      }
    );
};

export default hardwareactions;
