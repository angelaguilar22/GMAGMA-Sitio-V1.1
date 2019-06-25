import React from 'react';

//import of routes of page
import { HashRouter as Router, Route } from "react-router-dom";

//components of Index view
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Nav from './components/nav';

//Other component
import Identity from './components/Identify';
import LineTop from './components/others/LineTop';
import VisionSection from './components/others/VisionSection';
import WeSection from './components/others/WeSection';
import ValuesTitle from './components/others/ValuesTitle';
import ValueCard from './components/others/ValueCard';

//Pages 
import ClientsPage from './components/Pages/ClientsPage';

/*+++++++ functions of the render routes of pages +++++++*/

 var Index = () => {
  return (
    <div className="container">
      <Nav/>
      <Identity/>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

 var About = () =>  {
  return (
    <Identity />
  );
}

 var LineTopRender = () => {
  return(
    <LineTop/>
  );
}

 var WeSections = () => {
  return(
    <WeSection/>
  );
}

 var Vision = () => {
  return(
    <VisionSection/>
  );
}

 var Values = () => {
  return(
    <ValuesTitle/>
  );
}

 var Value = () => {
  return(
    <ValueCard/>
  );
}

var Clients = () => {
  return(
    <div className="container">
      <Nav/>
      <ClientsPage/>
      <Footer/>
    </div>
  );
}

/*+++++++ functions of the render routes of pages +++++++*/

//function that render the routes of page
function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Index} />
        <Route path="/about" component={About} />
        <Route path="/line" component={LineTopRender}/>
        <Route path="/vision" component={Vision}/>
        <Route path="/we" component={WeSections}/>
        <Route path="/valores" component={Values}/>
        <Route path="/valor" component={Value}/>
        <Route path="/clientes" component={Clients}/>
      </div>
    </Router>
  );
}

export default App;
