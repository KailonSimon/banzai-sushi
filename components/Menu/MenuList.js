import MenuItem from './MenuItem'
import menuStyles from '../../styles/Menu.module.css'
import Button from '../Button'

const MenuList = ({ menuItems }) => {

    return (
        <div className={menuStyles.grid}>
            {menuItems.map(menuItem => 
                <MenuItem key={menuItem.id} item={menuItem} />
            )}
        </div>
    )
}

export default MenuList
