import MenuList from "../components/MenuList"
import { data } from "../components/data/data"

const menu = () => {
    return (
        <div>
            <MenuList menuItems={data} />
        </div>
    )
}

export default menu
