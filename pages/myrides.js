import MainLayout from "@/components/layouts/MainLayout";
import { AuthContext } from "@/components/AuthProvider";
import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import LoadingCircle from "@/components/common/LoadingCircle";
import { unixToFormat } from "@/utils/dates";

const RidesList = () => {
  const { publicKey } = useContext(AuthContext);
  const router = useRouter();
  const { id } = router.query;
  const [rideInfo, setRideInfo] = useState(null);

  useEffect(() => {
    const getRideInfo = async (id) => {
      try {
        const { data } = await axios.get(`/api/rides`, {});
        setRideInfo(data?.rides);
        console.log("data =>", data);
      } catch (error) {
        console.error("Error getting ride info:", error);
        toast.error("Error getting ride info");
      }
    };

    if (router.isReady) {
      getRideInfo();
    }
  }, [router]);

  if (!publicKey) {
    return (
      <a className="underline" href="/">
        Plase login
      </a>
    );
  }

  return (
    <div>
      <MainLayout className="">
        <div className="wrapper my-8 flex w-full items-center justify-center">
          <div className="max-w-7xl">
            <h1 className="m-0 p-0 text-lg font-bold">Your Rides</h1>
            <div className="content">
              {!rideInfo ? (
                <LoadingCircle color="#000" />
              ) : (
                <div className="my-4 flex flex-col items-center justify-center">
                  {rideInfo && rideInfo.length > 0 ? (
                    <div className="flex flex-col items-center justify-center">
                      {rideInfo.map((ride, key) => (
                        <div
                          className="flex flex-col items-center justify-center "
                          key={key}
                        >
                          <a href={`/rides/${ride._id}`}>
                            <div className="flex items-center justify-center  px-2 text-black ">
                              <p className="mx-2 text-center underline">
                                ID: {ride.carId}
                              </p>
                              {" ->"}
                              <p className="text-center"> ${ride.price} USD</p>
                            </div>
                          </a>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center">No rides found</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default RidesList;
