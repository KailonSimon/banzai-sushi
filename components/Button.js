import buttonStyles from '../styles/Button.module.css'
import { ShoppingCartSimple } from 'phosphor-react'

const Button = (props) => {
    const {type, children, ...rest} = props;
    function renderIcon(type) {
        switch(type) {
            case "cart":
                return <ShoppingCartSimple size={24
                } color='#EEEEEE' />;
        }
    }

    return (
        <button className={buttonStyles.btn}>
            {children}
            <span className={buttonStyles.icon}>{renderIcon(type)}</span>
        </button>
    )
}

export default Button
