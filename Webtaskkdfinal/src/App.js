import logo from './logo.svg';
import './App.css';
import data from './ProductsData/product_dummy_data';
import SearchBar from './Components/SearchBar';
import Pcontextprovider from './store/context/producttobelisted';
import Listproducts from './Components/Listproducts';
import Header from './Components/Header';
import Card from './Components/Card';
function App() {
  return (
      <div>
      
      <Pcontextprovider>
      <Header/>
      <SearchBar/>
      <Listproducts/>
      
      </Pcontextprovider>
      </div>

  );
}

export default App;
