import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
const btnStyle = {
    position: 'fixed',
    bottom: '4rem',
    right: '1rem',
}
const TopBtn = () => {
    return (
        <button style={btnStyle} className="btn btn-primary" onClick={() => { scroll.scrollToTop() }}>Top</button>
    )
}

export default TopBtn;