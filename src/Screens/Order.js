import React from 'react'
// Components.
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Order = () => {
    return (
        <>
            <Navbar />
            {/* <section className="border p-5 m-5 text-gray-600 body-font overflow-hidden">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Animated Night Hill Illustrations</h1>
                                <div className="flex mb-4">
                                    <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
                                    <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
                                    <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
                                </div>
                                <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
                                <div className="flex border-t border-gray-200 py-2">
                                    <span className="text-gray-500">Color</span>
                                    <span className="ml-auto text-gray-900">Blue</span>
                                </div>
                                <div className="flex border-t border-gray-200 py-2">
                                    <span className="text-gray-500">Size</span>
                                    <span className="ml-auto text-gray-900">Medium</span>
                                </div>
                                <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                    <span className="text-gray-500">Quantity</span>
                                    <span className="ml-auto text-gray-900">4</span>
                                </div>
                                <div className="flex">
                                    <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
                                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                        </div>
                    </div>
                </section> */}


            {/* <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p>
                    </div>
                    <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                        <table class="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Plan</th>
                                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Speed</th>
                                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Storage</th>
                                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
                                    <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="px-4 py-3">Start</td>
                                    <td class="px-4 py-3">5 Mb/s</td>
                                    <td class="px-4 py-3">15 GB</td>
                                    <td class="px-4 py-3 text-lg text-gray-900">Free</td>
                                    <td class="w-10 text-center">
                                        <input name="plan" type="radio" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="border-t-2 border-gray-200 px-4 py-3">Pro</td>
                                    <td class="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
                                    <td class="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
                                    <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$24</td>
                                    <td class="border-t-2 border-gray-200 w-10 text-center">
                                        <input name="plan" type="radio" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="border-t-2 border-gray-200 px-4 py-3">Business</td>
                                    <td class="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
                                    <td class="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
                                    <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$50</td>
                                    <td class="border-t-2 border-gray-200 w-10 text-center">
                                        <input name="plan" type="radio" />
                                    </td>
                                </tr>
                                <tr>
                                    <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">Exclusive</td>
                                    <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">48 Mb/s</td>
                                    <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">120 GB</td>
                                    <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$72</td>
                                    <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                                        <input name="plan" type="radio" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                    </div>
                </div>
            </section> */}




            <Footer />
        </>
    )
}

export default Order;