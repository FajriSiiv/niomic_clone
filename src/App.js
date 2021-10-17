import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import "./style/index.scss";
import Belajar from "./components/Belajar";
import Testi from "./components/testi";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Belajar />
      <Testi />
      <Footer />
    </div>
  );
}

export default App;
