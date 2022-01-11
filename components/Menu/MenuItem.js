import React from 'react'
import cardStyles from '../../styles/Menu.module.css'
import Button from '../Button'

const MenuItem = ({item}) => {
    return (
        <div key={item.id} className={cardStyles.card}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <Button type="cart">Add To Cart</Button>
        </div>
    )
}

export default MenuItem
