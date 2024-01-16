import React, { Component } from 'react';
import glogo from '../../resources/g-logo.png'
import lang from '../../resources/svg/lang.svg'
import litDown from '../../resources/svg/Down.svg'
import facebook from '../../resources/svg/Facebook.svg'
import insta from '../../resources/svg/Instagram.svg'

const Footer = () => {
    return (

        <>
            <footer>
<div className="container">
    <div className="frth_frame">
        <div className="contacts">
            <h1>Grow Up</h1>
            <h3>Контакты</h3>
            <p>growup@gmail.com</p>
            <p>+123-45-678-910</p>
            <div className="socisls">
                <img src={facebook} alt=""/>
                <img src={insta} alt=""/>
            </div>
            <div className="lang">
                <img src={lang} alt=""/>
                <p>English</p>
                <img src={litDown} alt=""/>
            </div>
        </div>
        <div className="bg-logo">
            <img src={glogo} alt=""/>
        </div>
    </div>

</div>
</footer>
        </>
    )
}


export default Footer;