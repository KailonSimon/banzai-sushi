import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/menu'>Menu</Link>
                </li>
                <li>
                    <Link href='/'>Locations</Link>
                </li>
                <li>
                    <Link href='/'>Careers</Link>
                </li>
                <li>
                    <Link href='/'>Order Now</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
