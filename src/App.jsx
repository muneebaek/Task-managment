
import {BrowserRouter as Router,Routes,Route, Navigate,} from "react-router-dom";
import { SignUp } from "./pages/signup&signin/SignUp"
import { Login } from "./pages/signup&signin/Login";
import { Home } from "./pages/home/Home";

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>   
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
