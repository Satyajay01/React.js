import {Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import NavBar from "./Components/NavBar"


const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App