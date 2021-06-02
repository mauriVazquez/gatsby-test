import React from 'react'
import { Link } from 'gatsby'
import { 
    navBar,
    secondNavBar,
    navBarLogo,
    navBarBrandTitle,
    navLinks,
    navLinkItem,
    navLinkText
 } from '../css/index.module.css'

import { StaticImage } from 'gatsby-plugin-image'
let logoWidth = 32
let companyBrand = "NoRepPodium"
let navItems = [    
    { url:'/' , name: 'Ingresar'},
    { url:'/' , name: 'Registrarse'}
]
let SecondNavItems = [ 
    { url:'/' , name: 'Competencias'},
    { url:'/about' , name: 'Sobre nosotros'}
]

const NavBar = () => {
    return (
        <div>
            <nav className={navBar}>
                <div className={navBarLogo}>
                    <StaticImage className='inline' alt='Logo empresa' width={logoWidth} src="../images/icon.png" />
                    <div className={navBarBrandTitle}><Link to='/'>{companyBrand}</Link></div>
                </div>
                <ul className={navLinks}>
                    {navItems.map(
                        (item) => {
                            return <li className={navLinkItem}><Link className={navLinkText} to={item.url}>{item.name}</Link></li>
                        }
                    )}
                </ul>
            </nav>
            <nav className={secondNavBar}>
                <ul className={navLinks}>
                    {SecondNavItems.map(
                        (item) => {
                            return <li className={navLinkItem}><Link className={navLinkText} to={item.url}>{item.name}</Link></li>
                        }
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar