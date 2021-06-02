import React from 'react'
import { divHeading, headingTitle, content, twBlock } from '../css/components/layout.module.css'
import { card } from '../css/components/card.module.css'
import NavBar from './navBar'

const Layout = ({ pageTitle, children }) => {
    return (
        <main>
            <title>{pageTitle}</title>
            <NavBar/>
            <div className={divHeading}>
                <h1 className={headingTitle}>{pageTitle}</h1>
            </div>
            <div className={content}>
                <div className={twBlock}>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Layout