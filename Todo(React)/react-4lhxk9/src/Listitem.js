import React from 'react'


import "./styles.css";


const Listitem = ({taskarr,deleteId}) =>{




  const tlist = taskarr.map(taskarr=>{
  
  
  return(
 <div className = 'idcontain' key={taskarr.id}>
  <div onClick = {() =>{deleteId(taskarr.id)}}>{taskarr.task}</div>
</div>
  )

  }
    
    )



  return(
    <div className = 'Container'>
      {tlist}
      
    </div>
  )
    


  }

export default Listitem