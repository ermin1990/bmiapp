import React from 'react';
import Navbar from '../src/components/Navbar';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import ListResults from './Pages/Rezultati/ListResults';
import About from './Pages/About/About';
import AddUser from './Pages/Rezultati/AddUser';





function App() {
    return (
        
        <BrowserRouter>
        <div className="container">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/adduser" component={AddUser} />
          <Route path="/listresults" component={ListResults} />
          <Route path="/about" component={About} />         
        </div>
      </BrowserRouter>
      
        

    )
}

export default App;
