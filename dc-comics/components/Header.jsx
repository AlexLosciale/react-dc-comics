import logo from "./logo";
import navbar from "./navBar";

const Header = () => {
  return (
    <header>
      <nav>
          {logo()}
          {navbar()}
        </nav>
    </header>
  );
}
export default Header;