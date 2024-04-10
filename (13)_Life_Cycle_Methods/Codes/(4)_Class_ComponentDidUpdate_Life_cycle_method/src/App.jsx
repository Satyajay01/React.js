import React from 'react'

class App extends React.Component{
  constructor(){
    super();
    console.log("constructor")
    this.state={
      name:"satyajay"
    }
  }
  componentDidUpdate()
  {
    console.log("componentDidUpdate Run only after state or property is updated")
    
  }
  render(){
      console.log("render")
      return(
        <div>
          <h1>componentDidUpdate</h1>
          <h3>Hello {this.state.name} open console </h3>
          <p>componentDidUpdate Run only after state or property is updated </p>
          <button onClick={()=>{this.setState({name: "jay"})}}>Update name</button>

        </div>
      )

    }
    

      }
    


export default App