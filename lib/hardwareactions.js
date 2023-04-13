import axios from "axios";

const hardwareactions = {};

hardwareactions.rentcar = async () => {
  await axios
    .post(
      `https://io.adafruit.com/api/v2/rnajera/feeds/led1/data`,
      {
        value: "1",
      },
      {
        headers: {
          "X-AIO-Key": "aio_WCQG45bSAru0CJIam3n5wiIY1htc",
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
hardwareactions.opencar = async () => {
  await axios
    .post(
      `https://io.adafruit.com/api/v2/rnajera/feeds/led1/data`,
      {
        value: "2",
      },
      {
        headers: {
          "X-AIO-Key": "aio_WCQG45bSAru0CJIam3n5wiIY1htc",
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
hardwareactions.startmotor = async () => {
  await axios
    .post(
      `https://io.adafruit.com/api/v2/rnajera/feeds/led1/data`,
      {
        value: "3",
      },
      {
        headers: {
          "X-AIO-Key": "aio_WCQG45bSAru0CJIam3n5wiIY1htc",
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
          "X-AIO-Key": "aio_WCQG45bSAru0CJIam3n5wiIY1htc",
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
