import { Quotes } from "phosphor-react";
import './header.css'

const Header = () => {
    return (
        <div className="header__container">
            <div className="header__div"> 
                <h1 className="header__tittle"> Fatiando orações </h1>
                <Quotes size={32} color="#F5EBE0" weight="duotone" />
            </div>
        </div>
    )
}

export default Header;