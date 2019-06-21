import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";


import Listitem from './Listitem'
import AddItem from "./AddItem";

class App extends Component{
  state = {
    taskarr : [{task:'Ryu',id:1}, {task:'Press', id:40}]
  }



   handleSubmit = e =>{
      e.preventDefault()
    }

    deleteId = id => {
      
      const Taskarr = this.state.taskarr.filter(prvstate =>{

       return  prvstate.id !== id;
      }
      

      )

      this.setState({
        taskarr:Taskarr
      })
    }

  Adding = (prop) =>{
   prop.id = Math.random()*100*Math.random()
 

   let edit = [...this.state.taskarr , prop];
  
    
  
   this.setState({

    taskarr: edit

   })
   
  }

      
    



  render(){
    
    

  

    return(
      <div className = 'Bod'> 
        <h1 className='Title'>Todo - React</h1>
        
               <AddItem Adding ={this.Adding}  className = 'Query'/>
               <br></br>
         < Listitem taskarr = {this.state.taskarr} deleteId={this.deleteId}/>
         
      </div>
    )
  }
  }



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
