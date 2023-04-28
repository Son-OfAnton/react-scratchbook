import myPhoto from '../assets/admas.jpg'

import LinkedIn from "../assets/instagram.png";
import Email from "../assets/twitter.png";

export default function Info() {
  return (
    <main className="info">
      <img className="info--photo" src={myPhoto} alt="Admas Terefe" />
      <h1 className="info--name">Admas Terefe</h1>
      <h2 className="info--position">Frontend Developer</h2>

      <a
        className="info--website"
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <p className="info--website__text">admasterefe.website</p>
      </a>

      <div className="info--connect">
        <a
          className="info--connect__email"
          href="mailto:hellosattwik@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img className="info--connect__email__icon" src={Email} alt="Email" />
          <span>Email</span>
        </a>
        <a
          className="info--connect__linkedin"
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="info--connect__linkedin__icon"
            src={LinkedIn}
            alt="Linkedin"
          />
          <span>LinkedIn</span>
        </a>
      </div>
    </main>
  );
}
