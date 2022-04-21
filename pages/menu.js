import MenuList from "../components/Menu/MenuList"
import { menuItems } from "../components/data/data"

export default function Menu() {
    return (
        <>
            <MenuList menuItems={menuItems} />
        </>
    )
}

