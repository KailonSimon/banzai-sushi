import buttonStyles from '../styles/Button.module.css'

const Button = (props) => {
    const {children, ...rest} = props;

    return (
        <button>
            {children}
        </button>
    )
}

export default Button
