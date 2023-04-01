import React from 'react'

// Components.
import Navbar from '../Navbar';
import Card from '../../Components/Card';
import Footer from '../Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='bg-success text-white text-center fs-3'>Home</div>
            <Card />
            <Footer />
        </>
    )
}

export default Home;