import React from 'react';
import './App.css';
import Nav from './components/nav';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';
import ClientsPage from './components/Pages/ClientsPage';
import Identity from './components/Identify';
import TopSection from './components/others/TopSection';

import { BrowserRouter as Router, Route } from "react-router-dom";

function Index() {
  return (
    <div className="container">
      <Nav />
      <Identity/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

function Clients(){
  return(
    <ClientsPage/>
  );
}

function TopSection1(){
  return(
    <TopSection/>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Index} />
        <Route exact path="/clientes"  component={Clients} />
        <Route exact path="/top" component={TopSection1}/>
      </div>
    </Router>
  );
}


export default App;
