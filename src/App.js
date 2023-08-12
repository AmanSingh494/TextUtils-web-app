import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import React, {useState} from "react"
function App() {
  const [mode, setMode] = useState("dark")
  const toggleMode = () => {
    if (mode === "light") {
       setMode("dark")
    }else{
setMode("light")
}
    
  }
  return (
    <>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
      <TextForm heading='Enter text here to analyse' />
      <About />
    </>
  )
}

export default App
