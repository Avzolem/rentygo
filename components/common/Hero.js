import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";

import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
    TruckIcon,
} from "@heroicons/react/solid";

const feats = [
    {
        name: "Security:",
        description:
            "With RentyGo, you can be sure that your car is safe. You are the only person can open and start the car with your unique code.",
        icon: TruckIcon,
    },
    {
        name: "Time Savings:",
        description:
            "RentyGo can help drivers save time by avoiding traffic, providing a more efficient route, and avoiding parking hassles.",
        icon: TruckIcon,
    },
    {
        name: "Cost Saving:",
        description:
            "Pay only the time you drive. No more gas, no more insurance, no more maintenance, no more parking fees.",
        icon: TruckIcon,
    },
    {
        name: "Don't worry about the gasoline: ",
        description:
            "All the RentyGo cars are ready to drive, and have a maintenance record and a gas gauge for immediate use.",
        icon: TruckIcon,
    },
    {
        name: "Faster:",
        description:
            "Get the car nearest to you. No more waiting for a rent agency. No more wait for a parking spot.",
        icon: TruckIcon,
    },
    {
        name: "Availability:",
        description:
            "RentyGo is available 24 hours a day, 7 days a week. This means you can request a car anytime and anywhere the service is offered.",
        icon: TruckIcon,
    },
];

const features = [
    {
        name: "A safer car:",
        description:
            "Your rent codes are safe on the Solana blockchain the fastest blockchain in the world, nobody can modify or steal them.",
        icon: TruckIcon,
    },
    {
        name: "A unique rent:",
        description:
            "RentyGo generate codes for unlock the car, there are no copies, there are no counterfeits. We work with blockchain technology.",
        icon: TruckIcon,
    },
    {
        name: "A car to the future:",
        description:
            "Unlock, start and drive with you phone, track all your trips, gas, services and get your car history.",
        icon: TruckIcon,
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Hero() {
    return (
        <div className="relative">
            <main className="lg:relative">
                {/*  simple title to the right and image to the left*/}
                <section className="relative">
                    <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                            <div className="relative isolate mx-auto max-w-2xl overflow-hidden sm:mx-0 sm:max-w-none">
                                {" "}
                                {/* Aqui va la imagen */}
                                <img
                                    src="https://grupocuatricentenaria.com/tienda/image/catalog/NOSOTROS/carros.png"
                                    className="w-[40rem]  "
                                />
                            </div>

                            {/* Aqui va el texto */}
                            <div className="m-auto">
                                <h1 className="text-white-900 text-center text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                                    <span className=" text-black xl:inline">
                                        Discover{" "}
                                    </span>{" "}
                                </h1>
                                <h1 className="text-white-900 text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                                    <span className=" bg-gradient-to-r  from-indigo-500  to-cyan-500 bg-clip-text text-transparent xl:inline">
                                        RentyGo{" "}
                                    </span>
                                </h1>
                                <h1 className="text-white-900 text-center text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                                    <span className=" text-black xl:inline">
                                        Rent the car you need.{" "}
                                    </span>{" "}
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
                <br />
                <br />
                <br />
                <br />

                {/* Seccion de Features */}
                <section>
                    {" "}
                    <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                            <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
                                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                                    <h2 className="text-base font-semibold leading-7 text-purple-500">
                                        Jump in to Web3
                                    </h2>
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                                        A car with all the security of
                                        blockchain
                                    </p>
                                    <p className="mt-6 text-lg leading-8 text-black">
                                        Make your car rental experience
                                        unforgettable with RentyGo.
                                    </p>
                                    <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-black lg:max-w-none">
                                        {features.map((feature) => (
                                            <div
                                                key={feature.name}
                                                className="relative pl-9"
                                            >
                                                <dt className="inline font-semibold text-black">
                                                    <feature.icon
                                                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                                                        aria-hidden="true"
                                                    />
                                                    {feature.name}
                                                </dt>{" "}
                                                <dd className="inline">
                                                    {feature.description}
                                                </dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </div>
                            <div className="sm:px-6 lg:px-0">
                                <div className="relative isolate overflow-hidden bg-purple-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
                                    <div
                                        className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                                        aria-hidden="true"
                                    />
                                    <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                                        <img
                                            src="/images/lap.png"
                                            alt="Product screenshot"
                                            width={2432}
                                            height={1442}
                                            className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-purple-700 ring-1 ring-white/10"
                                        />
                                    </div>
                                    <div
                                        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br />
                <br />
                <br />
                <br />
                {/*  simple title to the right and image to the left*/}
                <section className="relative">
                    <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                            <div className="relative isolate mx-auto max-w-2xl overflow-hidden sm:mx-0 sm:max-w-none">
                                {" "}
                                {/* Aqui va la imagen */}
                                <img
                                    src="/images/herotablet.png"
                                    className="w-[40rem]  "
                                />
                            </div>

                            {/* Aqui va el texto */}
                            <div className="m-auto">
                                <h1 className=" text-center text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                                    <span className=" text-black xl:inline">
                                        Price you trip{" "}
                                    </span>{" "}
                                </h1>
                                <h1 className="text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                                    <span className=" bg-gradient-to-r  from-indigo-500  to-purple-500 bg-clip-text text-transparent xl:inline">
                                        Pay the gas,{" "}
                                    </span>
                                    <span className=" bg-gradient-to-r  from-cyan-500 via-indigo-500  to-purple-500 bg-clip-text text-transparent xl:inline">
                                        not the way.{" "}
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
                <br />
                <br />
                <br />
                <br />

                {/*  simple title to the left and image to the right*/}
                <section className="relative">
                    <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                            {/* Aqui va el texto */}
                            <div className="m-auto">
                                <h1 className="text-white-900  text-center text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                                    <span className=" text-black xl:inline">
                                        Download the App{" "}
                                    </span>{" "}
                                </h1>
                                <br />
                                {/* Enlace de descarga de la app https://ezticket.vercel.app/resources/EzTicket.apk */}
                                <div className="relative mx-auto flex justify-center overflow-hidden ">
                                    <img
                                        src="/images/qr-code.png"
                                        className=" w-[12rem]"
                                    />
                                </div>
                                <br />
                                <h1 className="text-white-900 text-center text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                                    <span className=" text-black">
                                        Check the list and find{" "}
                                    </span>
                                    <span className=" bg-gradient-to-r  from-cyan-500 via-indigo-500  to-purple-500 bg-clip-text text-transparent xl:inline">
                                        the best car{" "}
                                    </span>
                                    <span className=" text-black">
                                        for your needs.{" "}
                                    </span>
                                </h1>
                            </div>
                            {/* Aqui va la imagen */}
                            <div className="relative isolate mx-auto overflow-hidden sm:mx-0 sm:max-w-none">
                                {" "}
                                <img
                                    src="/images/herophone.png"
                                    className=" w-[40rem]  "
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <br />
                <br />
                <br />
                <br />

                {/*  simple title center text center*/}

                <section className="relative">
                    <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-black sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                            {feats.map((feat) => (
                                <div key={feat.name} className="relative pl-9">
                                    <dt className="inline font-semibold text-cyan-500">
                                        <feat.icon
                                            className="absolute left-1 top-1 h-5 w-5 text-cyan-500"
                                            aria-hidden="true"
                                        />
                                        {feat.name}
                                    </dt>{" "}
                                    <dd className="inline">
                                        {feat.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="relative overflow-hidden pt-16">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <img
                                src="/images/herolap.png"
                                alt="App screenshot"
                            />
                        </div>
                    </div>

                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl sm:text-center">
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

                            <p className="mt-6 text-lg leading-8 text-gray-500">
                                With all the power of the Solana blockchain to
                                create a user experience matchless.
                            </p>
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
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
