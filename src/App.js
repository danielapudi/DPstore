import './App.css';
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Usuario from "./components/Usuario";


function App() {
    return (
        <div className="App">
          <Usuario />
          <Navbar />
          <Products />
    </div>
  );
}



export default App;
