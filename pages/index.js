import MainLayout from "@/components/layouts/MainLayout";
import Hero from "@/components/common/Hero";
import Head from "next/head";
import ParticlesBackground from "../components/common/ParticlesBackground";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "@/components/AuthProvider";
import { Router, useRouter } from "next/router";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Home() {
    const [data, setData] = useState(null);
    const router = useRouter();

    const {
        signIn,
        signOut,
        name,
        email,
        isMinted,
        setIsMinted,
        publicKey,
        truncatePublicKey,
    } = useContext(AuthContext);

    const RentarAuto = async () => {
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
                    console.log(
                        "Error al enviar post al api de Adafruit",
                        error
                    );
                }
            );
    };
    const AbrirAuto = async () => {
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
                    console.log(
                        "Error al enviar post al api de Adafruit",
                        error
                    );
                }
            );
    };
    const PrenderMotor = async () => {
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
                    console.log(
                        "Error al enviar post al api de Adafruit",
                        error
                    );
                }
            );
    };
    const ApagarMotor = async () => {
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
                    console.log(
                        "Error al enviar post al api de Adafruit",
                        error
                    );
                }
            );
    };

    useEffect(() => {}, []);

    return (
        <div>
            <ParticlesBackground />
            <MainLayout>
                <main className="relative mb-auto flex flex-col  to-black ">
                    <div className="mx-auto w-full max-w-7xl pb-20 pt-16 text-center lg:py-32 ">
                        <div className="px-4 sm:px-8 lg:w-full ">
                            <h1 className="text-black-900 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                                <span className=" text-black xl:inline">
                                    Find on{" "}
                                </span>{" "}
                                <span className="  bg-gradient-to-r  from-cyan-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent xl:inline">
                                    RentyGo,{" "}
                                </span>
                                <br />
                                <span className=" text-black xl:inline">
                                    drive in{" "}
                                </span>{" "}
                                <span className=" bg-black bg-clip-text text-transparent xl:inline">
                                    the way you{" "}
                                </span>
                                <span className=" bg-gradient-to-r  from-cyan-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent xl:inline">
                                    like.{" "}
                                </span>
                            </h1>

                            <div className="mt-10 sm:flex sm:justify-center ">
                                <div className="rounded-md bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500  shadow ">
                                    <button
                                        onClick={() => {
                                            signIn();
                                        }}
                                    >
                                        {" "}
                                        <span className="flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white  md:px-10 md:py-4 md:text-lg">
                                            Connect Wallet  {" "}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="25"
                                                height="25"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z"
                                                    fill="white"
                                                ></path>{" "}
                                                <path
                                                    d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z"
                                                    fill="white"
                                                ></path>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                {/* <div className="mt-3 rounded-md shadow sm:ml-3 sm:mt-0">
                                    <a
                                        href="#init"
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-cyan-500 hover:bg-gray-200 md:px-10 md:py-4 md:text-lg"
                                    >
                                        ¿What is RentyGo?
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className=" relative mt-6 flex h-full w-full justify-center md:mt-0">
                        <a name="init"></a>

                        <Hero />
                    </div>

                    <div className="mx-auto w-full max-w-7xl pb-20 pt-16 text-center md:inline-flex lg:py-32 ">
                        <div className="px-4 sm:px-8 lg:w-full ">
                            <h1 className="text-black-900 text-4xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                                <span className=" text-black">Get a </span>{" "}
                                <span className=" bg-gradient-to-r  from-cyan-500 via-indigo-500  to-purple-500 bg-clip-text text-transparent ">
                                    Car,{" "}
                                </span>
                                <span className=" text-black ">
                                    drive the way you{" "}
                                </span>{" "}
                                <span className="  bg-gradient-to-r  from-cyan-500 via-indigo-500  to-purple-500 bg-clip-text text-transparent ">
                                    love.{" "}
                                </span>{" "}
                            </h1>

                            <div className="mt-10 sm:flex sm:justify-center ">
                                <div className="rounded-md shadow">
                                    <a
                                        href="/contact"
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-cyan-700 via-violet-700 to-purple-700 px-8 py-3 text-base font-medium text-white hover:bg-purple-700 md:px-10 md:py-4 md:text-lg"
                                    >
                                        {" "}
                                        <span>¡Sign up here!  </span>
                                    </a>
                                    <a name="scroll"></a>
                                </div>
                            </div>
                            <button
                                className="  rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700"
                                onClick={() => {
                                    RentarAuto();
                                }}
                            >
                                Rentar Auto
                            </button>
                            <button
                                className="  rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700"
                                onClick={() => {
                                    AbrirAuto();
                                }}
                            >
                                Abrir Auto
                            </button>
                            <button
                                className="  rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700"
                                onClick={() => {
                                    PrenderMotor();
                                }}
                            >
                                Prender Motor
                            </button>
                            <button
                                className="  rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700"
                                onClick={() => {
                                    ApagarMotor();
                                }}
                            >
                                Apagar Motor
                            </button>
                        </div>
                    </div>
                </main>
            </MainLayout>
        </div>
    );
}
