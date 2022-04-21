import MenuList from "../components/Menu/MenuList"
import { menuItems } from "../components/data/data"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Menu() {
    return (
        <div>
            <Header />
            <MenuList menuItems={menuItems} />
            <Footer />
        </div>
    )
}

