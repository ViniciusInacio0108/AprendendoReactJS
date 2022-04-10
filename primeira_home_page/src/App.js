import logo from './logo.svg';
import './App.css';

// import do header
import Header from "./components/header/Header"
// import da capa
import Capa from "./components/Capa/Capa"
//import do footer
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="App">
      

      <Header/>

      <Capa/>

      <Footer></Footer>


    </div>
  );
}

export default App;
