import "../css/header.scss"
import homeIcon from '../assets/icons/ic_home.svg'
function Header() {
  return (
    <header className="header">
        <div className="containerTextHeader">
            <span className="text1">Recipe<span class="text2">App</span></span>
        </div>
        <div className="menuHead">
            <ul>
                <li><p>Home</p></li>
                <li>Vegetarianos</li>
                <li>Platos Principales</li>
                <li>Tortas</li>
                <li>Comida R&aacute;pida</li>
                <li>Men&uacute; Ni&ntilde;os</li>
                <li>Sopas</li>
            </ul>
        </div>
        <img src={homeIcon} alt="home icon" className="icoHome"/>
    </header>
  );
}

export default Header;