import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';
import Services from './Services';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          {/* Add more routes here */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
