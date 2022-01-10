import MenuItem from './MenuItem'
import menuStyles from '../styles/Hero.module.css'
import Button from './Button'

const MenuList = ({ menuItems }) => {
    console.log(menuItems.map(menuItem => menuItem.name))

    /*{menuItems.map(menuItem => {
        <div className={menuStyles.card}>
            <h2>{menuItem.name}</h2>
            <p>{menuItem.description}</p>
        </div>
    })}*/
    return (
        <div className={menuStyles.grid}>
            {menuItems.map(menuItem => 
                <div key={menuItem.id} className={menuStyles.card}>
                    <h2>{menuItem.name}</h2>
                    <p>{menuItem.description}</p>
                    <Button>Add To Cart</Button>
                </div>
            )}
        </div>
    )
}

export default MenuList
