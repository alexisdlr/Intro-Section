import dataBiz from '../images/client-databiz.svg';
import maker from '../images/client-maker.svg';
import audioPhile from '../images/client-audiophile.svg';
import meet from '../images/client-meet.svg';


import {motion} from 'framer-motion';
import image from '../images/image-hero-desktop.png';
export function Section () {
    return(
        <section 
        className='container-all'>
            <motion.div 
            initial={{x: -1000}}
            transition={{delay: .5}}
            animate={{x: 0}}
            className='container-text'>
                <h1 
                className='title'>Make <br/>Remote Work</h1>
                <p className='parag'>
                Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
                </p>
                <motion.a 
                initial={{color: '#fff', background:'#000', border: '1px solid #000'}}
                whileHover={{color: '#000', background:'#fff'}}
                href='#'
                className='link'>Learn more</motion.a>
                <div className='container-clients'>
                    <img 
                    src={dataBiz}
                    className='img'/>
                     <img 
                    src={maker}
                    className='img'/>
                     <img 
                    src={meet}
                    className='img'/> 
                    <img 
                    src={audioPhile}
                    className='img'/>
                </div>
            </motion.div>
            <motion.div
            initial={{x: 1000}}
            transition={{delay: .5}}
            animate={{x: 0}}
            className='container-img'>
                <img className='img' src={image} />
            </motion.div>
        </section>
    )
}