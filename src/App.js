import './stylesheets/App.css';
import Home from "./components/home";
import Loading from "./components/loading";
import logo from "./assets/logo.png"

function App() {
  return (
    <div className="App">
      <Home logo={logo}/>
      <Loading />
    </div>
  );
}

export default App;
