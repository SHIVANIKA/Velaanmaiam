import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Button, container, Figure } from "react-bootstrap"
import agri from './agriculture-bg.jpg';
import FigureCaption from "react-bootstrap/esm/FigureCaption";


export default function Homeblog(){
  return <div>
    <container>
      <Figure className="position-relative">
      <img src = {agri} alt="agri" className ="img-fluid"/>
        <FigureCaption className = 'blogText'>
          <h3>Who we are </h3>
         <p>We VELAANMAIAM is bridge between you </p>
           <p> our buyers and sellers to make the organic </p>
          <p> products purchase easy and efficient way. </p>
          <div className="button">
         <Button onClick="knowmore">Know more</Button>
         </div>
        </FigureCaption>
        </Figure>
      </container>
    </div>

}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//        <h1>
//          Velaanmaiam 
//        </h1>
      
//       </header>
//     </div>
//   );
// }

