import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './screen/Login'
import Product from "./screen/Product";
import Error from "./screen/Error";
import Success from "./screen/Success";
import Producted from "./screen/Producted";
import Signup from "./screen/Signup";

function App() {
  return (
    <div>
  <Router>
    <Routes>
      <Route path="/" element={<Producted Component={Product} />} />
      {/*  private routing ko on karne ke liye is ko uncommit karna ha  */}
      <Route path="/login" element={<Login />} />
      {/* <Route path="/" element={<Product />} />  */}
      {/*  private routing ko on karne ke liye is ko commit karna ha  */}
      <Route path="/error" element={<Error />} />
      <Route path="/success" element={<Success />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>    
  </div>
  )
}

export default App