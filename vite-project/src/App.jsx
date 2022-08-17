// componentes
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

//  estilos
import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio">
      <h1>Elton Lima</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
