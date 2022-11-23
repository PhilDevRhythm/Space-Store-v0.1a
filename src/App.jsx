import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
import WebStore from './components/WebStore';
import Clicker from './components/Clicker';

function App() {
    return(
  <>
    <NavBar/>
    <CartWidget/>
    <ItemListContainer/>
  </>
)
}

export default App;
