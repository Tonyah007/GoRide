import Button from "./Button";
import logo from "../images/logo.png";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <Button>Sign up</Button>
    </header>
  );
}
