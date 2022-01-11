import Link from 'next/link'
import Button from './Button'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/menu'>Menu</Link>
                </li>
                <li>
                    <Link href='/locations'>Locations</Link>
                </li>
                <li>
                    <Link href='/careers'>Careers</Link>
                </li>
                <li>
                    <Link href='/order'>Order Now</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
