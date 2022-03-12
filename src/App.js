import "./App.css";
import Footer from "./components/footer/Footer";
import Header from './components/header/Header';
import Home from "./components/pages/homePage/HomePage";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer />
    </div>
  );
}

export default App;
