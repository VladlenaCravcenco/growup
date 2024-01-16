import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react';
import './app.css';


const Hide = (props) => {

    const {
        title = 'Target Advertising',
        children,
    } = props;

    const [isVisible, setVisible] = useState(false);
    const handleVisibility = () => setVisible(!isVisible);

    return (
        <>
            <div 
            onClick={handleVisibility}
            className="button"
            style={{backgroundColor: '#000',
        }}
            >
                {title}
            </div>

            <AnimatePresence>
                {
                    isVisible && (
                        <motion.div
                        initial={{height: 0}}
                        animate={{height: 'auto'}}
                        exit={{height: 0}}
                        style={{overflow: 'hidden', border: '1px solid #20BBEA'}}
                        transition={{duration: 2}}
                        >
                            <div style={{padding: '0.8rem 1.2rem', width: 300}}>
                                {children}
                            </div>

                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    )
}
export default Hide ;