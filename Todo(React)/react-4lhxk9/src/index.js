import React from 'react';
import ReactDOM from 'react-dom';




class App extends React.Component{

  state = {
    name :'wait',
    pos: 'Quarter',

  }
 
 changeName =(v) => {
   this.setState({
     name: v.target.value
   })
 }

 onClickd = (v) =>{
   alert("Woo");
 }
    
   
  render(){
     return(
       <div>  
          <h1>Form</h1>
          <p>his name is {this.state.name} & his position is {this.state.pos}</p>
         <form>
           <input type ="text" onChange={this.changeName}/>
           <button onClick={this.onClickd}>Submit</button>
         
          </form>
         
       </div>
       
     )
  }
}

ReactDOM.render(<App />,document.getElementById('app'));