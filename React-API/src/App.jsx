import MiApi from "./assets/components/MiApi";
import Logo from "./assets/components/Logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <img src={Logo} alt="Logo Simpsons" />

      <MiApi />
    </>
  );
}

export default App;
