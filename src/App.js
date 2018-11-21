import React, { Component } from 'react';
import Home from './components/Home'
import TopMenu from './components/TopMenu'
import Help from './components/Help'
import About from './components/About'
import AddBook from './components/AddBook'
import {Route, BrowserRouter, Switch } from 'react-router-dom'
import Books from './components/Books'
import UpdateBook from './components/UpdateBook'


class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <TopMenu />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/help' component={Help}/>
            <Route path='/addbook' component={AddBook}/>
            <Route path ='/:book_id/update' component={UpdateBook}/>
            <Route path ='/:book_id' component={Books}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
