import './App.css';
import Menus from './components/Menus';
import Contenu1 from './components/Contenu1';
import Contenu2 from './components/Contenu2';
import Contenu3 from './components/Contenu3';
import Contenu4 from './components/Contenu4';



function App() {
  return (
    <div className="container">
      <Menus/>
      <Contenu1/>
      <Contenu2/>
      <Contenu3/>
      <Contenu4/>
    </div>
  );
}

export default App;
