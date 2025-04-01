"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaShoppingCart, FaWindowClose } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex md:flex-row items-center bg-black text-white p-4 w-full md:justify-between">
            {/* ✅ Left Section: Logo + Navigation */}
            <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
                <div className="logo text-2xl font-bold text-center md:text-left">
                    <Link href="/">NextEcomm</Link>
                </div>

                {/* ✅ Navigation Links */}
                <div className="nav mt-2 md:mt-0 md:ml-6">
                    <ul className="flex items-center space-x-4">
                        <Link href="/shirts">
                            <li>Shirts</li>
                        </Link>
                        <Link href="/jeans">
                            <li>Jeans</li>
                        </Link>
                        <Link href="/jacket">
                            <li>Jackets</li>
                        </Link>
                        <Link href="/shoes">
                            <li>Shoes</li>
                        </Link>
                    </ul>
                </div>
            </div>

            {/* ✅ Right Section: Cart Button */}
            <div className="cart mt-2 md:mt-0 w-full md:w-auto flex justify-end">
                <button
                    className="px-4 py-2 rounded"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <FaShoppingCart color="white" size={30} />
                </button>
            </div>

            {/* ✅ Sidebar (Responsive) */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white p-6 transition-transform duration-300 
                ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
                    } md:w-80 z-50 shadow-lg`}
            >
                {/* ✅ Close Button */}
                <span
                    className="absolute top-4 right-4 cursor-pointer"
                    onClick={() => setIsSidebarOpen(false)}
                >
                    <FaWindowClose size={30} color="white" />
                </span>

                <h2 className="font-bold text-xl mb-4">Shopping Cart</h2>
                <ul>
                    <li className="p-2 border-b flex justify-between">
                        <div>Shirts</div>
                        <div className="flex">
                            <FaPlusCircle className="cursor-pointer" />
                            <div className="mx-2">Quantity</div>
                            <FaCircleMinus className="cursor-pointer" />
                        </div>
                    </li>
                    <li className="p-2 border-b">Jeans</li>
                    <li className="p-2 border-b">Shoes</li>

                </ul>
                <button className="btn bg-black mt-4 p-2 text-xl font-semibold mx-auto rounded-2xl hover:bg-gray-700 ">Checkout</button>
            </div>
        </div>
    );
};

export default Navbar;
