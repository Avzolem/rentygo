import MainLayout from "@/components/layouts/MainLayout";
import Hero from "@/components/common/Hero";
import Head from "next/head";
import ParticlesBackground from "../components/common/ParticlesBackground";
import { useState, useEffect } from "react";
import axios from "axios";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Home() {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        await axios
            .post(
                `https://io.adafruit.com/api/v2/rnajera/feeds/led1/data`,
                {
                    value: "1",
                },
                {
                    headers: {
                        "X-AIO-Key": "aio_BZld18iWpU77aFivDIKbUPlmmcT4",
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
                                    RentyGo{" "}
                                </span>
                                <span className=" text-black xl:inline">
                                    drive in{" "}
                                </span>{" "}
                                <br />
                                <span className=" bg-black bg-clip-text text-transparent xl:inline">
                                    the way you{" "}
                                </span>
                                <span className=" bg-gradient-to-r  from-cyan-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent xl:inline">
                                    like.{" "}
                                </span>
                            </h1>

                            <div className="mt-10 sm:flex sm:justify-center ">
                                <div className="rounded-md bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500  shadow ">
                                    <a
                                        href="/eventos"
                                        className="flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white  md:px-10 md:py-4 md:text-lg"
                                    >
                                        {" "}
                                        <span>Check our cars!  </span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="25"
                                            height="25"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                d="M488,224c-3-5-32.61-17.79-32.61-17.79,5.15-2.66,8.67-3.21,8.67-14.21,0-12-.06-16-8.06-16H428.86c-.11-.24-.23-.49-.34-.74-17.52-38.26-19.87-47.93-46-60.95C347.47,96.88,281.76,96,256,96s-91.47.88-126.49,18.31c-26.16,13-25.51,19.69-46,60.95,0,.11-.21.4-.4.74H55.94c-7.94,0-8,4-8,16,0,11,3.52,11.55,8.67,14.21C56.61,206.21,28,220,24,224s-8,32-8,80,4,96,4,96H31.94c0,14,2.06,16,8.06,16h80c6,0,8-2,8-16H384c0,14,2,16,8,16h82c4,0,6-3,6-16h12s4-49,4-96S491,229,488,224ZM125.26,268.94A516.94,516.94,0,0,1,70.42,272C50,272,49.3,273.31,47.86,260.56a72.16,72.16,0,0,1,.51-17.51L49,240h3c12,0,23.27.51,44.55,6.78a98,98,0,0,1,30.09,15.06C131,265,132,268,132,268Zm247.16,72L368,352H144s.39-.61-5-11.18c-4-7.82,1-12.82,8.91-15.66C163.23,319.64,208,304,256,304s93.66,13.48,108.5,21.16C370,328,376.83,330,372.42,341Zm-257-136.53a96.23,96.23,0,0,1-9.7.07c2.61-4.64,4.06-9.81,6.61-15.21,8-17,17.15-36.24,33.44-44.35,23.54-11.72,72.33-17,110.23-17s86.69,5.24,110.23,17c16.29,8.11,25.4,27.36,33.44,44.35,2.57,5.45,4,10.66,6.68,15.33-2,.11-4.3,0-9.79-.19Zm347.72,56.11C461,273,463,272,441.58,272a516.94,516.94,0,0,1-54.84-3.06c-2.85-.51-3.66-5.32-1.38-7.1a93.84,93.84,0,0,1,30.09-15.06c21.28-6.27,33.26-7.11,45.09-6.69a3.22,3.22,0,0,1,3.09,3A70.18,70.18,0,0,1,463.14,260.56Z"
                                                fill="white"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="mt-3 rounded-md shadow sm:ml-3 sm:mt-0">
                                    <a
                                        href="#init"
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-cyan-500 hover:bg-gray-200 md:px-10 md:py-4 md:text-lg"
                                    >
                                        ¿What is RentyGo?
                                    </a>
                                </div>
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
                                className="  rounded-md bg-cyan-500 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700"
                                onClick={() => {
                                    fetchData();
                                }}
                            >
                                Turn on button
                            </button>
                        </div>
                    </div>
                </main>
            </MainLayout>
        </div>
    );
}
