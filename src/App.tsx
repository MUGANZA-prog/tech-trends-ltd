import { BrowserRouter as Router, Routes,  Route } from "react-router-dom"
import Home from './pages/Home'
import About from "./pages/About"
import Contact from "./pages/Contact"


function App() {

  return (
   
    <Router>
    <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path = "/contact" element = { <Contact/>}/>
        <Route path="*" element = { <div>Not Found | 404</div>}/>
    </Routes>
</Router>
    
  )
}

export default App
