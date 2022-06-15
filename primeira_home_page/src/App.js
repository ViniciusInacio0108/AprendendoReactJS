import logo from './logo.svg';
import './App.css';

// import do header
import Header from "./components/header/Header"
// import da capa
import Capa from "./components/Capa/Capa"
//import do footer
import Footer from "./components/footer/Footer"


function HeaderAlternativa(){
  return(
    <p>Tudo bem?</p> 
  )
}

function App() {
  return (
    <div className="App">
      
      <HeaderAlternativa></HeaderAlternativa>

      <Header/>

      <Capa/>

      <Footer></Footer>


    </div>
  );
}

export default App;
