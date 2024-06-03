import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { faHome, faList, faCog } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)
    const location = useLocation()
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faList
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faHome
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }

    ]
    function closeSidebar() {
        setSidebar(false)
    }
    return (
        <>

            <div className='navbar container'>
                {/* Navbar  */}
                <Link to="/" className='logo'>F<span>oo</span>diesHub</Link>
                <div className='nav-links'>
                    {links.map((link, i) => {
                        return <Link to={link.path} key={i} className={location.pathname === link.path ? "active" : ""}>{link.name}</Link>
                    })}

                </div>

                {/* Side Bar */}
                <div onClick={() => setSidebar(true)} className={sidebar ? 'sidebar-btn active' : 'sidebar-btn'}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>

            </div>
            {sidebar && <Sidebar links={links} close={closeSidebar} />}
        </>

    )
}

export default Navbar
