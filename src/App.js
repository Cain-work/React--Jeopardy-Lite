import React, {Component} from 'react';
import Welcome from './components/welcome/Welcom';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        { Component }
        <Navigation />
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="eric" />}
        />
        <Route path="./clock/Clock.js" component={Clock} />
        <Route path="./contact/Contact.js" component={Contact} />
      </div>
    );
  }
}

export default App;
