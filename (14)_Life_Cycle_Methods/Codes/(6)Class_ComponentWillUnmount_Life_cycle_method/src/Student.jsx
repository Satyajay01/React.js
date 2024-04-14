import React from 'react'

class Student extends React.Component{
    componentWillUnmount()
    {
        alert("component Will Unmount called")
    }
  render(){
    return(
      <div>
        <h1> Student Component</h1>
      </div>
    )
  }
}

export default Student