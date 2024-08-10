import { useEffect, useState } from "react";
import "../App.css"
import { useNavigate } from "react-router-dom"
import Success from "./Success";
import Error from "./Error";
const Login = () => {

    const login = () => {
        localStorage.setItem('login', true)
        navigate("/");
    }

    useEffect(() => {
        let login = localStorage.getItem("login");
        if (login) {
          navigate("/");
        }
    }   );
    
    const navigate = useNavigate();

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

    const createFunc = () => {
        navigate("/signup")
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const loggeduser = JSON.parse(localStorage.getItem("user"));
        if(input.email === loggeduser.email && input.password === loggeduser.password) {
            // localStorage.setItem("loggedin", true)
            login()
            setSuccess(true)
            Successtimer()
            navigate("/")
        }else {
            // alert("Wrong Email or Password.")
            setError(true)
            Errortimer()
        }
    }

    return (
        <div>
            <div className="h-20">
            <div className="flex justify-center items-center">{error && <Error />}</div>
            <div className="flex justify-center items-center">{success && <Success />}</div>
            </div>
            <form className='loginscreen' onSubmit={handleLogin}>
                <div className='main'>
                    <div className='emaildiv'>
                        <p className='emailp'>Email</p>
                        <input className='emailinput' type='email' name="email" id="email" placeholder='Email' autoComplete="off" value={input.email} onChange={(e) => setInput({
                                ...input,
                                [e.target.name]: e.target.value,
                            })}/>
                    </div>
                    <div className='passdiv'>
                        <p className='passwordp'>Password</p>
                        <input className='passinput' type='text' name="password" id="password" placeholder='Password' autoComplete="off" value={input.password} onChange={(e) => setInput({
                                ...input,
                                [e.target.name]: e.target.value,
                            })}/>
                    </div>
                    <div className='btnlogin'>
                        <button className='loginbtn' type="submit">Login</button>
                    </div>
                    <div className='btncreate'>
                        <button className='createbtn' type="submit" onClick={createFunc}>Create new account</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login































// login screen 2 sign or login

// login form
// neeche ek link hoga signup k liye


// lekin age login krega  to sirf match krega password or email

// or agr signup krega to local storage me save krega



//  form submitted successfully
//  name , phone, sab kyuc
//  ek useffect me store krna  // check krkeba agr fuc se hojae