import newlogo from "../images/newlogo.png";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={newlogo} alt="secondlogo" />

      <section className="links">
        <div className="linksection">
          <h4>Quick links</h4>
          <div className="frame">
            <p>Home</p>
            <p>Lorem</p>
            <p>Ipsum</p>
          </div>
        </div>

        <div className="linksection">
          <h4>Quick links</h4>
          <div className="frame">
            <p>Home</p>
            <p>Lorem</p>
            <p>Ipsum</p>
          </div>
        </div>

        <div className="linksection">
          <h4>Quick links</h4>
          <div className="frame">
            <p>Home</p>
            <p>Lorem</p>
            <p>Ipsum</p>
          </div>
        </div>

        <div className="linksection">
          <h4>Quick links</h4>
          <div className="frame">
            <p>Home</p>
            <p>Lorem</p>
            <p>Ipsum</p>
          </div>
        </div>

        <div className="linksection">
          <h4>Quick links</h4>
          <div className="frame">
            <p>Home</p>
            <p>Lorem</p>
            <p>Ipsum</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
