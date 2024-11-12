import { useContext } from "react";
import Kosar from "./components/Kosar";
import { ApiContext } from "./context/ApiContext";
import Vasaroter from "./components/Vasaroter";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { KosarContext } from "./context/KosarContext";
import Urlap from "./components/Urlap";

function App() {
  const { termekLista } = useContext(ApiContext);


  return (
    <div className="container-fluid">
      <header className="App-header">
        <h1>FakeStore webáruház</h1>
      </header>
      <Urlap/>
    </div>
  );
}

export default App;
