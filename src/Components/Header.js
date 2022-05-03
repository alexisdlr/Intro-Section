import { useState } from 'react'
import iconTodo from '../images/icon-todo.svg'
import iconCalendar from '../images/icon-calendar.svg'
import iconPlanning from '../images/icon-planning.svg'
import iconRemind from '../images/icon-reminders.svg'
import {motion} from 'framer-motion'
import logo from '../images/logo.svg'

export function DropDownCompany() {
    function DropDownItems(props) {
        return (
            <motion.li
            initial={{opacity:0}}
            animate={{opacity:1}}
            >

            <a 
            href='#' className='dropDownItem'>
                {props.children}           
            </a>
            </motion.li>
        )

    }
    return(
        <motion.div
        className='dropDown'
        initial={{y:-800}}
        animate={{y: 0}}
        >
            <DropDownItems
            >history
            </DropDownItems>

             <DropDownItems
            >Our team
            </DropDownItems>
            <DropDownItems
            >
            Blog
            </DropDownItems>
         
            
        </motion.div>
    )
}

export function DropDown () {
    function DropDownItems (props) {
        return (
            <motion.li
            initial={{opacity:0}}
            animate={{opacity:1}}
            >

            <a 
            href='#' className='dropDownItem'>
                <span>
                    <img
                className='iconB'
                alt='icon'
                src={props.src}
                /></span>
                {props.children}           
            </a>
            </motion.li>
        )
    }
    return(
        <motion.div
        className='dropDown'
        initial={{y:-800}}
        animate={{y: 0}}
        >
            <DropDownItems
         
            src={iconTodo}
            >Todo List
            </DropDownItems>

             <DropDownItems
            src={iconCalendar}
            >Calendar/
            </DropDownItems>
            <DropDownItems
            src={iconRemind}
            >Reminders
            </DropDownItems>
            <DropDownItems
            src={iconPlanning}
            >
                Planning
            </DropDownItems>
            
        </motion.div>
        
    )
}


export function Header (props) {
    return(
        
        <motion.header 
        transition={{duration: .3,type: 'spring'}}
        initial={{opacity: 0, y: -800}}
        animate={{opacity: 1, y:0}}
        className='header'>
            <div className='container-img'>
                <img
                    className='img'
                    alt='logo img'
                    src={logo} />
            </div>
            <nav className='navigation'>
                <ul className='navigation__ul'>
                {props.children}
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
        </motion.header>
    )
}
export function NavItem (props) {
    const [open, setOPen] = useState(false);
    return(
        <li className='navigation__ul-li'>
        <motion.a 
            whileHover={{color: '#000000'}}
            href='#' className='link'
            onClick={() => setOPen(!open)}
            >
            {props.text}
            <img src={props.src}
            ></img>
       
        </motion.a>

        {open && props.children}
    </li>
    
    )
}
