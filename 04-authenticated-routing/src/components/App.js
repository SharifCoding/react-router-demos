import React, { Component } from 'react';
import '../styles/App.css';

// import Components here
import Home from './HomeComponent';
import Hello from './HelloComponent';
import About from './AboutComponent';
import Books from './BooksComponent';

// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Admin from './AdminComponent';
import Login, { fakeAuth } from './LoginComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <ul>
              <li><Link to="/hello">Hello</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/books">Books</Link></li>
              <li><Link to="/admin">Admin</Link></li>
            </ul>
          <hr/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/hello" component={Hello} />
              <Route path="/about" component={About} />
              <Route path="/books" component={Books} />
              <Route path="/login" component={Login}/>
              <PrivateRoute authed={fakeAuth.isAuthenticated} path="/admin" component={Admin} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default App;
