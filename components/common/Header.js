/* eslint-disable @next/next/no-img-element */
import { Fragment, useState, useContext } from "react";
import Link from "next/link";
import { Popover, Transition, Menu } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useSession, signOut } from "next-auth/react";
import classNames from "@/utils/classNames";
import { useEffect } from "react";
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
        { name: "CARS", href: "/eventos" },
        { name: "MY TRAVELS", href: "/mistickets" },
        { name: "CONTACT US ", href: "/contact" },
        { name: "CANDY MACHINE", href: "/candymachine" },
        { name: "SLIDE DECK ", href: "/slideck" },
    ],
};
let phantom;

const Header = () => {
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

    return (
        <Popover className="relative ">
            <div
                className="pointer-events-none absolute inset-0 z-20 shadow"
                aria-hidden="true"
            />
            <div className="relative z-20">
                {/* DESKTOP */}
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8">
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
                    <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
                        <Popover.Group as="nav" className="flex space-x-10">
                            {navigation.pages.map((page) => (
                                <Link key={page.name} href={page.href}>
                                    <a className="text-blackyar text-base font-medium text-black hover:text-cyan-500">
                                        {page.name}
                                    </a>
                                </Link>
                            ))}
                        </Popover.Group>
                        {/* HEADER DEKTOP RIGHT SECTION BUTTONS */}
                        <div className="flex items-center md:ml-12">
                            {publicKey ? (
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="flex rounded-full bg-cyan-500 text-sm focus:outline-none focus:ring-white  focus:ring-offset-2">
                                            <span className="sr-only">
                                                Open user menu
                                            </span>

                                            <Image
                                                className="rounded-full px-1 py-2"
                                                width={32}
                                                height={32}
                                                src="/images/phantom.png"
                                                alt=""
                                            />
                                            <div className="px-1 py-2 text-black">
                                                {publicKey}
                                            </div>
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-40 mt-2 w-48 origin-top-right rounded-md bg-black py-1 shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link href="/user/profile">
                                                        <a
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100"
                                                                    : "",
                                                                "block px-4 py-2 text-sm text-black"
                                                            )}
                                                        >
                                                            Mi Cuenta
                                                        </a>
                                                    </Link>
                                                )}
                                            </Menu.Item>

                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div
                                                        className={classNames(
                                                            active
                                                                ? "bg-black"
                                                                : "",
                                                            "block cursor-pointer px-4 py-2 text-sm text-black"
                                                        )}
                                                        onClick={() => {
                                                            signOut();
                                                        }}
                                                    >
                                                        Sign Oug
                                                    </div>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            ) : (
                                <button
                                    className="  rounded-md bg-cyan-500 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700"
                                    onClick={() => {
                                        signIn();
                                    }}
                                >
                                    <div className="flex items-center space-x-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
                                            />
                                        </svg>
                                        <span>Connect Wallet</span>
                                    </div>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE */}
            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel
                    focus
                    className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
                >
                    <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pb-6 pt-5 sm:pb-8">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Link href="/">
                                        <a>
                                            {" "}
                                            <img
                                                className="h-8 w-auto"
                                                src={logoUrl}
                                                alt="logo"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <XIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 py-6">
                            <div className="grid grid-cols-2 gap-4">
                                {navigation.pages.map((page) => (
                                    <Link key={page.name} href={page.href}>
                                        <a className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                            {page.name}
                                        </a>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
};

export default Header;
