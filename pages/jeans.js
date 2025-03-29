import Link from 'next/link'
import React from 'react'

const Jeans = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                {/* ✅ Wrap all product cards inside a single flex container */}
                <div className="flex flex-wrap -m-4">
                    {/* ✅ Dynamically render products */}
                    {[...Array(10)].map((_, index) => (
                        <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <Link href={"/products/bestproducts"}>
                                <div className="block relative rounded overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="m-auto md:m-0 h-[36vh] block"
                                        src="https://m.media-amazon.com/images/I/31T6pQzzHgL.jpg"
                                    />
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                        T-Shirts
                                    </h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">
                                        Best Product
                                    </h2>
                                    <p className="mt-1">₹16.00</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Jeans