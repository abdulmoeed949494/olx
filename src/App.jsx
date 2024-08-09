import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './screen/Login'
import Products from "./screen/Product";
import Error from "./screen/Error";
import Success from "./screen/Success";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/products" element={<Products />} />
      <Route path="/error" element={<Error />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  </Router>    
  )
}

export default App