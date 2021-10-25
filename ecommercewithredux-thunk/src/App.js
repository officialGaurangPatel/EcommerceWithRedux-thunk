import './App.css';
import Header from './containers/Header';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import ProductListing from './containers/productListing';
import ProductDetail from './containers/productDetail';

function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
    <Switch>
      <Route path="/" exact component={ProductListing}/>
      <Route path="/product/:productId" exact component={ProductDetail}/>
      <Route> 404 NOT FOUND</Route>
    </Switch>

    </Router>
    </div>
  );
}

export default App;
