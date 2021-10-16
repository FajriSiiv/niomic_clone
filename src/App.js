import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import "./style/index.scss";
import Belajar from "./components/Belajar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Belajar />
    </div>
  );
}

export default App;
