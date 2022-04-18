import './App.css';
import Menus from './components/Menus';
import Contenu1 from './components/Contenu1';
import Contenu2 from './components/Contenu2';
import Contenu3 from './components/Contenu3';
import Contenu4 from './components/Contenu4';
import Video from './components/Video';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Menus/>

      <Contenu1/>
      <Contenu2/>
      <Video/>
      <Contenu3/>
      <Contenu4/>

      <Footer/>     
     
     
    </div>
  );
}

export default App;
