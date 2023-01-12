import imageFooter from '../assets/Grupo7610.png';
import "../css/footer.scss"

function Footer() {
  return (
    <footer class="footer">
        <span>Con el patrocinio de</span>
        <img class="imgFooter" src={imageFooter} alt="image footer" />
    </footer>
  );
}

export default Footer;