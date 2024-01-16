import React, { Component } from 'react';
import logo from '../../resources/svg/logo.svg';
import burger from '../../resources/svg/Icon.svg';
import vector1 from '../../resources/png/Vector.png'


const Header = () => {
    return (
        <>
                    <div className="container">
                        <div className='vector1'><img src={vector1}/></div>
                        <div className="header">
                            <div><img src={logo} alt="GrowUpAgency" /></div>
                            <div><img src={burger} alt="" /></div>
                        </div>
                    </div>
        </>
    )
}
export default Header;