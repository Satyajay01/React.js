import React from 'react'

class App extends React.Component{
  constructor()
  {
    super();
    this.state={
      name: "Satyajay"
    }
    
  }
  componentDidMount()
  {
    console.log("ComponentDidMount runs only once")
  }
  render() 
  {
    console.log("render")
    return(
      <div>
        <h1>component Did Mount {this.state.name}</h1>
        <p>open console and click 2,3 time Update button</p>
        <button onClick={()=>{this.setState({name: "jay"})}}>Update name</button>
      </div>
    )
  }
}
export default App; 
