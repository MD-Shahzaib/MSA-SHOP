import React from 'react'

const Footer = () => {
    // Get Year.
    const date = new Date();
    const year = date.getFullYear()

    return (
        <>
            <div className='bg-dark text-white text-center'>© {year} Muhammad Shahzaib, Inc. All rights reserved.</div>
        </>
    )
}

export default Footer;