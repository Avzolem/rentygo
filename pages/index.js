import MainLayout from "@/components/layouts/MainLayout";
import Hero from "@/components/common/Hero";
import Head from "next/head";
import ParticlesBackground from "../components/common/ParticlesBackground";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "@/components/AuthProvider";
import { Router, useRouter } from "next/router";
import hardwareactions from "@/lib/hardwareactions";
import LoadingCircle from "@/components/common/LoadingCircle";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const { rentcar, opencar, startmotor, turnoffcar } = hardwareactions;

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

  //Check Session...
  // useEffect(() => {
  //     if (publicKey) {
  //         //Redirect to /getacar
  //         setTimeout(() => {
  //             router.push("/getacar");
  //         }, 1000);
  //     }
  // }, [publicKey]);

  return (
    <div>
      <ParticlesBackground />
      <MainLayout>
        <main className="relative mb-auto flex flex-col  to-black ">
          <div className="mx-auto w-full max-w-7xl pb-20 pt-16 text-center lg:py-32 ">
            <div className="px-4 sm:px-8 lg:w-full ">
              <h1 className="text-black-900 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className=" text-black xl:inline">Find on </span>{" "}
                <span className="  bg-gradient-to-r  from-cyan-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent xl:inline">
                  RentyGo,{" "}
                </span>
                <span className=" text-black xl:inline">drive in </span> <br />
                <span className=" bg-black bg-clip-text text-transparent xl:inline">
                  the way you{" "}
                </span>
                <span className=" bg-gradient-to-r  from-cyan-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent xl:inline">
                  like.{" "}
                </span>
              </h1>

              <div className="mt-10 flex flex-col items-center justify-center ">
                {publicKey ? (
                  <>
                    <div className="mb-4 mt-3 font-bold sm:ml-3 sm:mt-8">
                      Your Wallet Address: <br />
                      <span>{publicKey}</span>
                    </div>
                    <div className="mt-3 font-bold sm:ml-3 sm:mt-0">
                      <div className="buttoncontainer my-4 w-full">
                        <button
                          className="w-full  bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 px-3 py-2 font-bold text-white"
                          onClick={() => {
                            router.push("/getacar");
                          }}
                        >
                          New Ride
                        </button>
                      </div>
                      <div className="buttoncontainer my-4  w-full">
                        <button
                          className="w-full  bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 px-3 py-2 font-bold text-white"
                          onClick={() => {
                            router.push("/myrides");
                          }}
                        >
                          My Rides
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="rounded-md bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500  shadow ">
                    <button
                      onClick={() => {
                        signIn();
                      }}
                    >
                      {" "}
                      <span className="flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white  md:px-10 md:py-4 md:text-lg">
                        Connect Phantom Wallet 👻
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>{" "}
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
                <span className=" text-black ">drive the way you </span>{" "}
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
                  rentcar();
                }}
              >
                Rentar Auto
              </button>
              <button
                className="  rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700"
                onClick={() => {
                  opencar();
                }}
              >
                Abrir Auto
              </button>
              <button
                className="  rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700"
                onClick={() => {
                  startmotor();
                }}
              >
                Prender Motor
              </button>
              <button
                className="  rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700"
                onClick={() => {
                  turnoffcar();
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
