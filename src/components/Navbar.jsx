import React from 'react';
import "./Navbar.css"
import img1 from '../img/search.png'
import img2 from '../img/itunes.png'
import img3 from '../img/x.png'
import img4 from '../img/bag.png'
function Navbar() {
  return (
    <div className='navi'>
        <img className='logo' src={img2} alt="logo" />
        <form action="">
            <button>
                <img className='searchLogo' src={img1} alt="" />
            </button>
            <button>
                <input type="text" name="" id="" placeholder='search'/>
            </button>
            <img className='deletLogo' src={img3} alt="" />
        </form>


        <button className='cart'>
            <img src={img4} alt="" />
        </button>
    </div>
  )
}

export default Navbar