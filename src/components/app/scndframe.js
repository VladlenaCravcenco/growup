import React, { Component } from 'react';
import arrdown from '../../resources/svg/Down.svg'
import Hide from './hideanimation';



function ScndFrame  (){

    return (
        <>
            <div className="scnd_frame">
                <div className="container">
                    <div className="btn_down">
                        <img src={arrdown} alt="" />
                    </div>

                    <div className="title_main">Our service</div>
                    <div className="buttons">
                        
                            <Hide title = "Target Advertising">
                                Social Media Marketing<br />Video Production<br />Website creation<br />
                                <button>price</button>
                            </Hide>
                        
                        <div className="button">
                            Social Media Marketing
                        </div>
                        <div className="button">
                            Video Production
                        </div>
                        <div className="button">
                            Website creation
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ScndFrame;
