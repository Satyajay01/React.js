import React, { Component } from 'react';
import { CommonContext } from './components/CommonContext';
import MainPage from './components/MainPage';
import UpdateButton from './components/UpdateButton';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();

    this.updateColor = (color) => {
      this.setState({
        color:color
      });
    }


    this.state = {
      color: "green",
      updateColor: this.updateColor
    };
  


}


  render() {

    return (
      <div style={{height: "90vh"}}>
      <CommonContext.Provider value={this.state}>
        <Header/>
        <h1>This is Context API</h1>
        <MainPage/>
        <UpdateButton/>
        <Footer/>
      </CommonContext.Provider>
    </div>

    );
  }
}

export default App;
