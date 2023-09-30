import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/cart" component={CartPage} />
    </Switch>
  );
};

export default App;
