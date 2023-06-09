/* eslint-disable @next/next/no-img-element */
import { Fragment, useState, useContext, useEffect } from "react";
import Link from "next/link";
import { Popover, Transition, Menu } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useSession, signOut } from "next-auth/react";
import classNames from "@/utils/classNames";
import { Router, useRouter } from "next/router";
import Image from "next/image";
import { connectWallet } from "@heroicons/react/solid";
import toast from "react-hot-toast";
import { useStorageUpload } from "@thirdweb-dev/react";
import { AuthContext } from "@/components/AuthProvider";

import LoadingCircle from "@/components/common/LoadingCircle";

const price = process.env.NEXT_PUBLIC_MINTING_PRICE;
const SOLANA_NETWORK = process.env.NEXT_PUBLIC_SOLANA_NETWORK;

//HEADER SETUP
const logoUrl = "/logo.png";
const navigation = {
    categories: [],
    pages: [
        { name: "CAR CATALOGUE", href: "/catalogue" },
        { name: "CONTACT US ", href: "/contact" },
        { name: "SLIDE DECK ", href: "/slideck" },
    ],
};
let phantom;

const Header = () => {
    const router = useRouter();
    const { signOut, publicKey } = useContext(AuthContext);

    //   //handle signout stat
    //   useEffect(() => {
    //     if (!publicKey) {
    //       console.log("log out and redirect");
    //       router.push("/");
    //     }
    //   }, [router]);

    return (
        <Popover className="relative ">
            <div
                className="pointer-events-none absolute inset-0 z-20 shadow"
                aria-hidden="true"
            />
            <div className="relative z-20">
                {/* DESKTOP */}
                <div className="mx-auto flex max-w-7xl items-center justify-items-center px-4 py-5 sm:px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8">
                    <div>
                        <Link href="/">
                            <a className="flex">
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src={logoUrl}
                                    alt="logoUrl"
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <div className="hidden items-center md:flex md:flex-1 md:justify-center">
                        <Popover.Group as="nav" className="flex space-x-10">
                            {navigation.pages.map((page) => (
                                <Link key={page.name} href={page.href}>
                                    <a className="text-blackyar text-base font-bold text-black hover:text-cyan-500">
                                        {page.name}
                                    </a>
                                </Link>
                            ))}
                        </Popover.Group>
                    </div>
                    {/* //signout from wallet if connected */}
                    {publicKey && (
                        <button
                            className="rounded-xl bg-red-400 px-2 py-2 text-white"
                            onClick={() => {
                                signOut();
                            }}
                        >
                            Log out
                        </button>
                    )}
                </div>
            </div>
        </Popover>
    );
};

export default Header;
