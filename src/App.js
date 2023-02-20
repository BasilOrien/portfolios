import "./App.css";
import { Main } from "./Components/Main";
import Nav from "./Components/Navigation";
import Statusbar from "./Components/Statusbar";

function App() {
  return (
    <div className="App">
      <Statusbar/>
      <Nav />
      <Main/>
    </div>
  );
}

export default App;
