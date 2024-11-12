import { useContext } from "react";
import { ApiContext } from "./context/ApiContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Public from "./pages/Public";

function App() {
  const { termekLista } = useContext(ApiContext);


  return (
    <div className="container-fluid">
      <header className="App-header">
        <h1>FakeStore webáruház</h1>
      </header>
      <Public></Public>
    </div>
  );
}

export default App;
