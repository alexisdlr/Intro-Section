import arrowUp from '../images/icon-arrow-up.svg';
import arrowDown from '../images/icon-arrow-down.svg';
import {motion} from 'framer-motion';
import logo from '../images/logo.svg';

export function Header () {
    
    return(
        <>
        
        <motion.header 
        transition={{duration: .3,type: 'spring'}}
        initial={{opacity: 0, y: -800}}
        animate={{opacity: 1, y:0}}
        className='header'>
            <div className='container-img'>
                <img
                    className='img'
                    src={logo} />
            </div>
            <nav className='navigation'>
                <ul className='navigation__ul'>
                    <li className='navigation__ul-li'>
                        <motion.a 
                            whileHover={{color: '#000000'}}
                            href='#' className='link'>
                            Features
                            <img src={arrowDown}></img>
                        </motion.a>
                    </li>
                    <li className='navigation__ul-li'>
                        <motion.a
                            whileHover={{color: '#000000'}}
                            href='#' className='link'>
                            Company
                            <img src={arrowDown}></img>
                        </motion.a>
                    </li>
                    <li className='navigation__ul-li'>
                        <motion.a
                            whileHover={{color: '#000000'}}
                            href='#' className='link'>
                            Careers
                        </motion.a>
                    </li>
                    <li className='navigation__ul-li'>
                        <motion.a
                            whileHover={{color: '#000000'}}
                            href='#' className='link'>
                            About
                        </motion.a>
                    </li>
                </ul>
                <div className='container-log'>
                    <motion.a                          
                        whileHover={{color: '#000000'}}
                        href='#' className='link'>
                        Login
                    </motion.a>
                    <motion.a
                        initial={{ color: 'hsl(0, 0%, 41%)', background:'#fff',
                        border:'1px solid hsl(0, 0%, 41%)' }}
                        whileHover={{
                            color: '#fff', background:'#000'
                           }}
                        href='#' className='link'>
                        Register
                    </motion.a>
                </div>
            </nav>
        </motion.header></>
    )
}