import React from 'react'

// Components.
import Card from '../../Components/Card';
import Footer from '../Footer';
import Navbar from '../Navbar';

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