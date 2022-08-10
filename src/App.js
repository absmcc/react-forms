import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import About from "./pages/About"
import Contact from "./pages/Contacts"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Form from "./components/Form"
const App = () => {
  return (
    <BrowserRouter>
    <Header />
<Routes>
  <Route index element={<Home />} />
  <Route  path="about" element={<About/>} />
  <Route path ="contact" element= {<Contact />} />
  <Route path="*" element={<NotFound/>} />
  </Routes>
  <Footer />
</BrowserRouter>
)
}

const NotFound = () =>{
  return(
    <>
    <h3>page not found</h3>
    </>
  )
}



      
  


export default App
