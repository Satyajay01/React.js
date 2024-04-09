import React from 'react'

class User extends React.Component
{
    render(){
        console.warn("Render method", this.props)
        return(
            <div>
                <h2>Mounting, Updating, and Unmounting.</h2>
                <h1> {this.props.name}</h1>
            </div>
        )
    }
}
export default User;