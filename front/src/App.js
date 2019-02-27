import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Sign_in from './components/Sign_in';
import Error from './components/Error';
import Sign_up from './components/Sign_up';
import End from './components/End';
import Account_recovery from './components/Account_recovery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className='root'>
          <Switch>
            <Route path='/sign-in' component={Sign_in} exact />
            <Route path='/home' component={Home} />
            <Route path='/sign-up' component={Sign_up} />
            <Route path='/account-recovery' component={Account_recovery} />
            <Route path='/end' component={End} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
