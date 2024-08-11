import { createContext, useState } from 'react'
import { ProductData } from './common/productsData';



export const StateContext = createContext(null)

export default function StateProvider({ children }) {
    
  const [products, setProducts] = useState(ProductData);

  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  }

  const [SignupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
})

  const [input, setInput] = useState({
    email: "",
    password: "",
})

const [error, setError] = useState(false)
const [success, setSuccess] = useState(false)

const Successtimer = () => {
    setTimeout(() => {
        setSuccess(true)
    }, 1000)
}

const Errortimer = () => {
    setTimeout(() => {
        setError(false)
    }, 2000)
}

  const [isLogin, setIsLogin] = useState(false);

  
  return <StateContext.Provider value={{
     showProfile, setShowProfile, toggleProfile, products, setProducts, input, setInput, error, setError, success, setSuccess, Successtimer, Errortimer, SignupInput, setSignupInput, isLogin, setIsLogin
  }}>
    {children}
  </StateContext.Provider>
}
