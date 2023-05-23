import React from 'react'
// Components.
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Order = () => {
    return (
        <>
            <Navbar />
            <div className="container my-5 d-flex flex-column justify-content-center align-items-center">
                <div className="w-75 mb-5">
                    <h1 className="text-center">Pricing</h1>
                    <p className="text-center">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p>
                </div>
                <table className="w-75 mb-5">
                    <thead className='rounded p-4' style={{ background: "#f0f2f5" }}>
                        <tr>
                            <th className='py-3 px-2'>Plan</th>
                            <th className='py-3 px-2'>Speed</th>
                            <th className='py-3 px-2'>Storage</th>
                            <th className='py-3 px-2'>Price</th>
                            <th className='py-3 px-2'>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-bottom'>
                            <td className="py-3 px-2">Start</td>
                            <td className="py-3 px-2">5 Mb/s</td>
                            <td className="py-3 px-2">15 GB</td>
                            <td className="py-3 px-2">Free</td>
                            <td className="py-3 px-2">
                                <button className="btn btn-sm btn-primary">Detail</button>
                            </td>
                        </tr>
                        <tr className='border-bottom'>
                            <td className="py-3 px-2">Pro</td>
                            <td className="py-3 px-2">25 Mb/s</td>
                            <td className="py-3 px-2">25 GB</td>
                            <td className="py-3 px-2">$24</td>
                            <td className="py-3 px-2">
                                <button className="btn btn-sm btn-primary">Detail</button>
                            </td>
                        </tr>
                        <tr className='border-bottom'>
                            <td className="py-3 px-2">Business</td>
                            <td className="py-3 px-2">36 Mb/s</td>
                            <td className="py-3 px-2">40 GB</td>
                            <td className="py-3 px-2">$50</td>
                            <td className="py-3 px-2">
                                <button className="btn btn-sm btn-primary">Detail</button>
                            </td>
                        </tr>
                        <tr className='border-bottom'>
                            <td className="py-3 px-2">Exclusive</td>
                            <td className="py-3 px-2">48 Mb/s</td>
                            <td className="py-3 px-2">120 GB</td>
                            <td className="py-3 px-2">$72</td>
                            <td className="py-3 px-2">
                                <button className="btn btn-sm btn-primary">Detail</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='w-75 d-flex justify-content-between align-items-center'>
                    <button className="btn btn-primary">Button1</button>
                    <button className="btn btn-primary">Button2</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Order;