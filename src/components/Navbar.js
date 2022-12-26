import React from 'react';
import '../components/styles/navbar.css';

const Navbar = () => {
  return (
    <nav>
        <div className="nav-box">
            <span className="my_shop">
                DAREDEVIL <span className='my'>STORES</span>
            </span>
            <div className='cart'>
            <span>Home</span>
            <span>  cart </span>
            </div>
        </div>
    </nav>
  )
};

export default Navbar;


