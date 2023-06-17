import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import payment from "./images/payment.png";
import map from "./images/map.png";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="app">
      <Header />
      <section className="hero">
        <h1>Travel 24/7 With Ease</h1>
        <p>
          orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae
          tortor condimentum lacinia quis vel eros donec ac odio
        </p>
        <Button>Request a ride</Button>
      </section>

      <section className="payment">
        <img src={payment} alt="payment" />
        <article>
          <h2>Easy payment</h2>
          <p>
            orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae
            tortor condimentum lacinia quis vel eros donec ac odio
          </p>
        </article>
      </section>

      <section className="map">
        <article>
          <h2>Available in 87 countries</h2>
          <p>
            orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae
            tortor condimentum lacinia quis vel eros donec ac odio
          </p>
        </article>
        <img src={map} alt="map" />
      </section>

      <Footer />
    </main>
  );
}

export default App;
