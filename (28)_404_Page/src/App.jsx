import {Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import NavBar from "./Components/NavBar"
import Page_Not_Found from "./Pages/Page_Not_Found"

const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />

            // 404 Page
          <Route path="*" element={<Page_Not_Found/>} />
      </Routes>
    </>
  )
}

export default App