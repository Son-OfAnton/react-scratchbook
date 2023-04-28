import github from '../assets/github.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'


export default function Footer() {
  return (
    <footer className="footer">
      <a
        className="footer--links"
        href="https://twitter.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="footer--links__icon" src={twitter} alt="Twitter" />
      </a>

      <a
        className="footer--links"
        href="https://facebook.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="footer--links__icon" src={facebook} alt="Facebook" />
      </a>

      <a
        className="footer--links"
        href="https://instagram.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="footer--links__icon" src={instagram} alt="Instagram" />
      </a>

      <a
        className="footer--links"
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="footer--links__icon" src={github} alt="Github" />
      </a>
    </footer>
  );
}
