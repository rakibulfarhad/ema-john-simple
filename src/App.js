import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './componants/Header/Header';
import Shop from './componants/Shop/Shop';
import OrderReview from './componants/OrderReview/OrderReview';
import Inventory from './componants/Inventory/Inventory';
import NotFound from './componants/NotFound/NotFound';
import PlaceOrder from './componants/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div>
      
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route exact path="/shop">
            <Shop></Shop>
          </Route>
          <Route exact path="/review">
            <OrderReview></OrderReview>
          </Route>
          <Route exact path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
