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
                            <div class="w-full">
                                <img
                                    src="https://grupocuatricentenaria.com/tienda/image/catalog/NOSOTROS/carros.png"
                                    class="w-[40rem] "
                                    alt="boletos"
                                />
                            </div>
                        </div>

                        <br />
                        <br />
                        <span className="text-2xl font-bold tracking-tight text-white  ">
                            Here is a video that explains how it works
                        </span>

                        <br />
                        <br />

                        <LiteYouTubeEmbed
                            aspectHeight={9}
                            aspectWidth={16}
                            id="OKK8O7dqwis"
                            title="EzTicket"
                        />

                        <br />
                        <br />

                        <span className="justify-center text-2xl font-bold text-white  ">
                            Extra Repositories
                        </span>
                        <br />
                        <br />
                        <span className="justify-center  text-white  ">
                            Solana Rust Program ⚙️
                        </span>
                        <br />
                        <Link href="https://github.com/ramonnajera/ezticket">
                            <span className="justify-center  text-sky-500  ">
                                https://github.com/ramonnajera/ezticket
                            </span>
                        </Link>
                        <br />
                        <br />
                        <span className="justify-center  text-white  ">
                            Candy Machine 🍬
                        </span>
                        <br />
                        <Link href="https://github.com/Avzolem/candy-machine-eztickets">
                            <span className="justify-center  text-sky-500  ">
                                https://github.com/Avzolem/candy-machine-eztickets
                            </span>
                        </Link>
                        <br />
                        <br />
                        <span className="justify-center  text-white  ">
                            Native Mobile App 📲
                        </span>
                        <br />
                        <Link href="https://github.com/jonamx13/EzTickets_App">
                            <span className="justify-center  text-sky-500  ">
                                https://github.com/jonamx13/EzTickets_App
                            </span>
                        </Link>
                        <br />
                        <br />

                        <span className="justify-center text-2xl font-bold text-white  ">
                            Our Dev Team 🌭
                        </span>
                        <div className="mt-8 grid grid-cols-2 justify-center">
                            <div className="mt-8 flex-col justify-center px-5">
                                <div class="w-full">
                                    <img
                                        src="/images/ramon.jpeg"
                                        class="w-[20rem] "
                                    />
                                    <span className="justify-center text-2xl font-bold text-white  ">
                                        Ramon Najera
                                    </span>
                                </div>
                            </div>

                            <div className="mt-8 flex-col justify-center px-5">
                                <div class="w-full">
                                    <img
                                        src="/images/andres.png"
                                        class="w-[20rem] "
                                    />
                                    <span className="justify-center text-2xl font-bold text-white  ">
                                        Andres Aguilar
                                    </span>
                                </div>
                            </div>

                            <div className="mt-8 flex-col justify-center px-5">
                                <div class="w-full">
                                    <img
                                        src="/images/bart.jpeg"
                                        class="w-[20rem] "
                                    />
                                    <span className="justify-center text-2xl font-bold text-white  ">
                                        Bart Lopez
                                    </span>
                                </div>
                            </div>
                            <div className="mt-8 flex-col justify-center px-5">
                                <div class="w-full">
                                    <img
                                        src="/images/jona.jpeg"
                                        class="w-[20rem] "
                                    />
                                    <span className="justify-center text-2xl font-bold text-white  ">
                                        Jonathan Meixueiro
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
                                src="https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdark-horizontal.e4df684f.svg&w=256&q=75"
                                className=" w-[15rem]  "
                            />
                        </div>
                        <div className="relative mx-auto flex justify-center overflow-hidden ">
                            {" "}
                            <img
                                src="/images/grizzlython.png"
                                className=" w-[15rem]  "
                            />
                        </div>

                        <br />
                        <span className="justify-center text-xl text-white">
                            With all the power of the Solana blockchain to
                            create a user experience matchless.
                        </span>

                        <br />
                        <br />
                        <h2 className="text-base font-semibold leading-7 text-indigo-400">
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

                        <h1 className="text-white-900 text-4xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                            <span className=" text-white">Get an </span>{" "}
                            <span className=" bg-gradient-to-r  from-emerald-500 via-indigo-500  to-purple-500 bg-clip-text text-transparent ">
                                EzTickets{" "}
                            </span>
                            <span className=" text-white ">
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
