import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialog';
import {BrowserRouter, Route} from 'react-router-dom';


let App = () => {
  return(
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Route path='/message' component={Dialogs}/>
          <Route path='/profile' component={Profile}/>
        </div>
      </div>
    </BrowserRouter>
  );
}; 

export default App;
