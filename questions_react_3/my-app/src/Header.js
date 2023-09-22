import {NavLink, Outlet} from 'react-router-dom'

const Header = () => {

    return(<>
        
        <header>Headerです</header>
        <nav>
            <ul>
                <li><NavLink to="/FormComponent">お問合せフォーム</NavLink></li>
                <li><NavLink to="/PostalCode">郵便番号取得</NavLink></li>
            </ul>
        </nav>
        <Outlet/>
    </>)
}

export default Header