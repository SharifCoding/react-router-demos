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
  Switch
} from 'react-router-dom';

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
            </ul>
          <hr/>
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/hello" component={Hello} />
              {/* 'url:/hello/goodmorning' will display 'Hello World!' message due to Switch order */}
              <Route path="/hello/goodmorning" render={() => {return <h1 className="display-3">Good Morning!</h1>}} />
              <Route path="/about" component={About} />
              <Route path="/books" component={Books} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
