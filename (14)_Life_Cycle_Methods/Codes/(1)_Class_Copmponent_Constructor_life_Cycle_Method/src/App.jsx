import React from 'react'

class App extends React.Component{
  constructor()
  {
    super();
    this.state={
      data:"Constructor"
    }
  }

  render()
  {
    return(<>
      <h1></h1>
      <h1>Helo this is a Class Component {this.state.data} life Cycle Method</h1>
      </>
    )

  }

}

export default App;