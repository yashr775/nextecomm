import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="flex  md:flex-row items-center bg-black text-white p-4 w-full md:justify-between">
            {/* ✅ Left Section: Logo + Navigation */}
            <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
                <div className="logo text-2xl font-bold text-center md:text-left"><Link href={"/'"}>NextEcomm</Link></div>

                {/* ✅ Navigation Links */}
                <div className="nav mt-2 md:mt-0 md:ml-6">
                    <ul className="flex items-center space-x-4">
                        <Link href="/shirts"><li>Shirts</li></Link>
                        <Link href="/jeans"><li>Jeans</li></Link>
                        <Link href="/jacket"><li>Jackets</li></Link>
                        <Link href="/shoes"><li>Shoes</li></Link>
                    </ul>
                </div>
            </div>

            {/* ✅ Right Section: Cart (Always on the Right) */}
            <div className="cart mt-2 md:mt-0 w-full md:w-auto flex justify-end">
                <button className=" text-black px-4 py-2 rounded"><FaShoppingCart color="white" size={30} /></button>
            </div>
        </div>
    );
};

export default Navbar;
