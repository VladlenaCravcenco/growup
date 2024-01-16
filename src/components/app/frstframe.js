import React, { Component } from 'react';
import vector2 from '../../resources/png/Vector2.png'

const FrstFrame = () => {

    return (
        <>
         <div className="frst_frame">
                    <div className="container">

                        <div className="title_header">
                            <h6>Достижение результатов через инструменты</h6>
                            <h1>Performance Marketing</h1>
                            <h6>С целью помогать клиентам масштабировать их бизнес и расти как можно быстрее.</h6>
                        </div>
                        <div className="button_pop"><button id="open-popup">Оставить заявку</button></div>
                        <div className='vector2'><img src={vector2}/></div>

                    </div>
                </div>
        </>
    )

}

export default FrstFrame;
