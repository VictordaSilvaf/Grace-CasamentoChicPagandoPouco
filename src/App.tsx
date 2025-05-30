import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import './styles/embla.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 400, // duração padrão da animação em milissegundos
      once: true, // anima apenas uma vez
    });
  }, []);

  return (
    <Home />
  );
}

export default App;
