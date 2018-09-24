import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'
import "./style.css";




class App extends React.Component{

  state = {
    task:'',

  }
 
 

 valueChange = (v) => {

  this.setState({

    task : v.target.value
  })
 }

 onClickd = (v) =>{
    var node = document.createElement("LI");
    var textnode = document.createTextNode(this.state.task);
    node.appendChild(textnode);


      var button = document.createElement("button");
      button.innerHTML = "x";
      node.appendChild(button);
      node.setAttribute("class","cancel");







    document.getElementById("list").appendChild(node);
    v.preventDefault();
 }

clear = (v) =>{
var myList = document.getElementById('list');
myList.innerHTML = '';
  v.preventDefault();  
}

    
   
  render(){
     return(
       <div>  
          <h1>Todo List</h1>
        <form>
           <input type ="text" onChange={this.valueChange}/>
           <button onClick={this.onClickd}>Submit</button>
           <button onClick={this.clear}>Clear</button>
          </form>
          <ul id = "list"> 
            
            
          </ul>
           <script>
           
         
           
           </script>
       </div>
       
     )
  }
}

ReactDOM.render(<App />,document.getElementById('app'));