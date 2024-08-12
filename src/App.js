import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {action, originals} from './urls'


function App() {
  return (
    <div className="App">
    <NavBar />
    <Banner />
    <RowPost title='Netflix originals' url={action}/>
    <RowPost title='Action' isSmall url={originals}/>
    </div>
  );
}

export default App;
