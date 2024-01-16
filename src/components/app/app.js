import React, { useEffect } from 'react';
import Header from './header';
import FrstFrame from './frstframe';
import ScndFrame from './scndframe';
import Flash from './flash';
import ThrdFrame from './thrdframe';
import Footer from './footer';

import './app.css';

const App = () => {

    return (
        <>
            <Header />
            <FrstFrame />
            
                <ScndFrame />
                <Flash />
                <ThrdFrame />
            
            <Footer />

        </>
    )

};

export default App;
