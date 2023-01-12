import "../css/home.scss"

//media
import vegetaian from '../assets/icons/ic_vegetarian.svg';
import fastFood from '../assets/icons/ic_fast-food.svg';
import kids from '../assets/icons/ic_kids.svg';
import soup from '../assets/icons/ic_soup.svg';
import cake from '../assets/icons/ic_cake.svg';
import main from '../assets/icons/ic_main.svg';
import imageHome from '../assets/bcq.jpg'

function Header() {
  let types = [
    {
      name: "Vegetarianos",
      img: vegetaian
    },
    {
      name: "Principales",
      img: main
    },
    {
      name: "Rápida",
      img: fastFood
    },
    
    {
      name: "Tortas",
      img: cake
    },
    {
      name: "Menú Niños",
      img: kids
    },
    {
      name: "Sopas",
      img: soup
    },
  ]
  return (
    <div className="containerHome">
        <img src={imageHome} alt="image home" className="imgHome" />
        <div className="containerTextHome">
            <h2 className="text1Home">Recetas</h2>
            <h2 className="text2Home">para todos</h2>
        </div>
        <div className="containerContentType">
          <ul className="containerContentType">
            {
              types.map(type => {
                return (
                  <li className="contentType">
                    <img  src={type.img} alt={type.name} />
                    <span>{type.name}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>

    </div>


  );
}

export default Header;