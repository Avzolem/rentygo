import MainLayout from "@/components/layouts/MainLayout";
import { AuthContext } from "@/components/AuthProvider";
import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import LoadingCircle from "@/components/common/LoadingCircle";
import { unixToFormat } from "@/utils/dates";

const RideInfoPage = () => {
    const { publicKey, sendTransaction } = useContext(AuthContext);
    const router = useRouter();
    const { id } = router.query;
    const [rideInfo, setRideInfo] = useState(null);

    useEffect(() => {
        const getRideInfo = async (id) => {
            try {
                const { data } = await axios.get(`/api/rides/${id}`);
                setRideInfo(data);
                console.log("data =>", data);
                console.log("data =>", data);
            } catch (error) {
                console.error("Error getting ride info:", error);
                toast.error("Error getting ride info");
            }
        };

        if (router.isReady && id) {
            getRideInfo(id);
        }
    }, [router]);

    const endRide = async () => {
        try {
            await axios.delete(`/api/rides/${id}`);
            toast.success("Ride ended");
            //Refresh page
            router.replace(router.asPath);
        } catch (error) {
            console.error("Error ending ride:", error);
            toast.error("Error ending ride");
        }
    };

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
                        <h1 className="m-0 p-0 text-lg font-bold">
                            Your Ride Info
                        </h1>
                        <div className="content">
                            {!rideInfo ? (
                                <LoadingCircle color="#000" />
                            ) : (
                                <div className="my-4 flex flex-col items-center justify-center">
                                    <p>
                                        {" "}
                                        Car: {rideInfo?.car?.name}{" "}
                                        {rideInfo?.car?.model}
                                    </p>
                                    <p>Status: {rideInfo?.ride?.status}</p>
                                    <p>
                                        Ride Start:
                                        {unixToFormat(
                                            rideInfo?.ride?.startUnix,
                                            "PPP: hh:mm a"
                                        )}
                                    </p>
                                    {rideInfo?.ride?.endUnix && (
                                        <p>
                                            Ride End:
                                            {unixToFormat(
                                                rideInfo?.ride?.endUnix,
                                                "PPP: hh:mm a"
                                            )}
                                        </p>
                                    )}

                                    {rideInfo?.ride?.price && (
                                        <div>
                                            <p className="my-4 font-bold">
                                                Final Price: {""}
                                                {rideInfo?.ride?.price} USD
                                            </p>

                                            <div className="buttoncontainer my-8">
                                                <button
                                                    className="rouded-xl w-full  bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 px-3 py-2 font-bold text-white"
                                                    onClick={() => {
                                                        // sendTransaction(
                                                        //     rideInfo?.ride
                                                        //         ?.price
                                                        // );
                                                    }}
                                                >
                                                    Pay
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {rideInfo?.ride?.status === "inuse" && (
                                        <div className="buttoncontainer my-8">
                                            <button
                                                className="w-full rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 px-3 py-2 font-bold text-white"
                                                onClick={() => {
                                                    endRide();
                                                }}
                                            >
                                                End Ride
                                            </button>
                                        </div>
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

export default RideInfoPage;
