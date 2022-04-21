import './App.css';
import Menus from './components/Menus';
import HomePage from './components/HomePage';
import Services from './components/Services';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Menus/>

      <HomePage/>
      <Services/>


      <Footer/>     
     
     
    </div>
  );
}

export default App;
