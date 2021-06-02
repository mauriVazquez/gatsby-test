import React from 'react'
import {card} from '../css/components/card.module.css'

const Card = ({ children }) => {
    return (
        <div className={card}>
            {children}
        </div>
    )
}

export default Card