import React, { Component } from 'react';
import photo1 from '../../resources/photos/photo1.png'
import photo2 from '../../resources/photos/photo2.png'

const ThrdFrame = () => {
    return (

        <>
            <div className="thrd_frame">
                <div className="title_main">Why Choose Us</div>
                <div className="photos">
                    <div className="photo_l">
                        <div className="photo_mask">
                            <img src={photo1} alt="" />
                            <div className="name_photo_l">
                                video prod.
                            </div>
                        </div>
                        <div className="photo_mask">
                            <img src={photo2} alt="" />
                            <div className="name_photo_l">
                                video prod.
                            </div>
                        </div>
                        <div className="button_pop"><button>Оставить заявку</button></div>

                    </div>
                    <div className="photo_r">
                        <div className="photo_mask">
                            <img src={photo1} alt="" />

                            <div className="name_photo_r">
                                grab delivery
                            </div>
                        </div>
                        <div className="button_pop"><button>Оставить заявку</button></div>

                        <div className="photo_mask">
                            <img src={photo2} alt="" />

                            <div className="name_photo_r">
                                grab delivery
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ThrdFrame;