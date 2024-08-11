import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './screen/Login';
import Product from "./screen/Product";
import Header from "./screen/Header";
import Producted from "./screen/Producted";
import Signup from "./screen/Signup";
import StateProvider from "./state";

function App() {
  return (
    <StateProvider>
      <Router>
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/" element={<Producted Component={Product} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </StateProvider>
  );
}

export default App;
















// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import Login from './screen/Login'
// import Product from "./screen/Product";
// import Producted from "./screen/Producted";
// import Signup from "./screen/Signup";
// import Header from "./screen/Header";

// function App() {
//   return (
//     <div>
//   <Router>
//     <Routes>
//       <Route path="/header" element={<Header />} />
//       <Route path="/" element={<Producted Component={Product} />} />
//       {/*  private routing ko on karne ke liye is ko uncommit karna ha  */}
//       <Route path="/login" element={<Login />} />
//       {/* <Route path="/" element={<Product />} />  */}
//       {/*  private routing ko on karne ke liye is ko commit karna ha  */}
//       <Route path="/signup" element={<Signup />} />
//     </Routes>
//   </Router>    
//   </div>
//   )
// }

// export default App