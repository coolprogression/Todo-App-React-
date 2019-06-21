import React, {Component} from 'react'




import "./styles.css";

class AddItem extends Component{
  state = {
    task : ""
  }

  Changing = e =>{
    this.setState({
      task: e.target.value
    })
   // console.log(this.state.tasknote)
  }

  onSubm = e =>{
    e.preventDefault()
    this.props.Adding(this.state)
    e.target.reset()
  }
  render(){
     

    return(

      <div>
        <form onSubmit={this.onSubm} className ="Adder">
            <label>Add a Task</label>
            <br></br>
            <input type = 'text' placeholder ='Enter Task' onChange={this.Changing} value ={this.state.value}/>
        </form>

      </div>
    )
  }
}

export default AddItem 