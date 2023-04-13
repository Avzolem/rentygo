import MainLayout from "@/components/layouts/MainLayout";
import ParticlesBackground from "../components/common/ParticlesBackground";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Link from "next/link";

export default function Slideck() {
    return (
        <div>
            <ParticlesBackground />
            <MainLayout className="relative">
                <div className="">
                    <div className="mx-auto max-w-2xl justify-center px-4 py-16 text-center sm:py-20 ">
                        <h2 className="text-3xl font-bold tracking-tight text-black md:text-5xl">
                            <span> This is how it works</span>
                            <span className="  bg-gradient-to-r  from-cyan-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent xl:inline">
                                {" "}
                                RentyGo
                            </span>
                        </h2>
                        <br />
                        <span className="text-2xl font-bold tracking-tight text-black  ">
                            We try to make it as easy as possible for you to get
                            your rental car
                        </span>
                        <div className="mt-8 flex justify-center">
                            <div className="w-full">
                                <img
                                    src="https://grupocuatricentenaria.com/tienda/image/catalog/NOSOTROS/carros.png"
                                    className="w-[40rem] rounded-xl"
                                />
                            </div>
                        </div>

                        <br />
                        <br />
                        <span className="text-2xl font-bold tracking-tight text-black  ">
                            Here is a video that explains how it works
                        </span>

                        <br />
                        <br />

                        <LiteYouTubeEmbed
                            aspectHeight={9}
                            aspectWidth={16}
                            id="MV_3Dpw-BRY"
                            title="RentyGo"
                        />

                        <br />
                        <br />

                        <span className="justify-center text-2xl font-bold text-black  ">
                            Repositories
                        </span>
                        <br />
                        <br />
                        <span className="justify-center  text-black  ">
                            Sistema Embebido ⚙️
                        </span>
                        <br />
                        <Link href="https://github.com/ramonnajera/ezticket">
                            <span className="justify-center  text-sky-500  ">
                                https://github.com/Avzolem/rentygo-sistemaembebido
                            </span>
                        </Link>
                        <br />
                        <br />
                        <span className="justify-center  text-black  ">
                            Plataforma Web y WPA 🌐
                        </span>
                        <br />
                        <Link href="https://github.com/Avzolem/candy-machine-eztickets">
                            <span className="justify-center  text-sky-500  ">
                                https://github.com/Avzolem/rentygo
                            </span>
                        </Link>
                        <br />
                        <br />

                        <span className="justify-center text-2xl font-bold text-black  ">
                            Our Dev Team 🌭
                        </span>
                        <div className="mt-8 grid grid-cols-2 justify-center">
                            <div className="mt-8 flex-col justify-center px-5">
                                <div className="w-full">
                                    <img
                                        src="/images/ramon.jpeg"
                                        className="w-[20rem] rounded-xl"
                                    />
                                    <span className="justify-center text-2xl font-bold text-black  ">
                                        Ramon Najera
                                    </span>
                                </div>
                            </div>

                            <div className="mt-8 flex-col justify-center px-5">
                                <div className="w-full">
                                    <img
                                        src="/images/andres.png"
                                        className="w-[20rem] rounded-xl"
                                    />
                                    <span className="justify-center text-2xl font-bold text-black  ">
                                        Andres Aguilar
                                    </span>
                                </div>
                            </div>

                            <div className="mt-8 flex-col justify-center px-5">
                                <div className="w-full">
                                    <img
                                        src="/images/javier.png"
                                        className="w-[20rem] rounded-xl"
                                    />
                                    <span className="justify-center text-2xl font-bold text-black  ">
                                        Javier Martinez
                                    </span>
                                </div>
                            </div>
                            <div className="mt-8 flex-col justify-center px-5">
                                <div className="w-full">
                                    <img
                                        src="/images/magio.png"
                                        className="w-[20rem] rounded-xl "
                                    />
                                    <span className="justify-center text-2xl font-bold text-black  ">
                                        Magio Bustillos
                                    </span>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <h2 className="text-base font-semibold leading-7 text-indigo-400">
                            Powered by
                        </h2>
                        <div className="relative mx-auto flex justify-center overflow-hidden ">
                            {" "}
                            <img
                                src="https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F8d6c8ff9-e171-4223-a4b2-1384ee7530b8_2568x643.png"
                                className=" w-[15rem]  "
                            />
                        </div>
                        <br />
                        <br />
                        <span className="justify-center text-xl text-black">
                            With all the power of the Solana blockchain to
                            create a user experience matchless.
                        </span>
                        <br />
                        <br />
                        <div className="relative mx-auto flex justify-center overflow-hidden ">
                            {" "}
                            <img
                                src="https://www.talent-land.mx/wp-content/uploads/2022/09/tl2023-og.png"
                                className=" w-[25rem]  rounded-xl"
                            />
                        </div>
                        <br />
                        <h2 className="text-base font-semibold leading-7 text-cyan-500">
                            Developed by HackDogs
                        </h2>
                        <br />
                        <div className="relative mx-auto flex justify-center overflow-hidden ">
                            {" "}
                            <img
                                src="/images/dogo.png"
                                className=" w-[10rem]  "
                            />
                        </div>

                        <br />
                        <br />

                        <h1 className="text-black-900 text-4xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                            <span className=" text-black">Get an </span>{" "}
                            <span className=" bg-gradient-to-r  from-emerald-500 via-indigo-500  to-purple-500 bg-clip-text text-transparent ">
                                EzTickets{" "}
                            </span>
                            <span className=" text-black ">
                                for the events you{" "}
                            </span>{" "}
                            <span className=" text-purple-500">love. </span>{" "}
                        </h1>

                        <br />
                    </div>
                </div>
            </MainLayout>
        </div>
    );
}
