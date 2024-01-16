import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Flash = () => {
    useEffect (() => {
AOS.init({duration: 1500});
    },[]);
    return (

        <>
            <div className="flash">
                <div className="flash_text">
                    <div className='animation' data-aos="fade-down">
                        С помощью таргетированной рекламы вы можете оптимизировать использование своего рекламного бюджета.
                        
                    </div>

                    <div className='animation' data-aos="fade-down">
                       Вы выбираете, сколько вы готовы потратить, и ваша реклама будет показываться только заинтересованной
                        аудитории.
                        </div>
                    <div className='animation' data-aos="fade-down">
                        Что позволяет получить максимальный результат от каждого потраченного доллара.
                    </div>
                </div>

            </div>
        </>
    )
}


export default Flash;
