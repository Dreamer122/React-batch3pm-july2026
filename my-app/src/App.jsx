import Home from "./Home"
import { About } from "./About"
import { Contact } from "./Contact"
import "./App.css"
function App() {
  const obj={
    'font-size':"70px"
  }

  //  html tags -> lowercase
  // <App> <- react component
  return (
     <> 
     {/* wrapper */}
     {/* react fragment */}
     {/* jsx -> javascript xml */}

       <h1 style={{background:'red',color:"white",}}> React Project 1</h1>
       <h2 style={obj}> second line</h2>
       {/* component */}
       <Home></Home>
       <About></About>
       <Contact></Contact>
      
      
     </>
    
  )
}

export default App
