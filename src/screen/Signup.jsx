import { useContext } from "react";
import "../App.css"
import { useNavigate } from "react-router-dom"
import { StateContext } from "../state";


function Signup() {

    const { SignupInput, setSignupInput } = useContext(StateContext)

    console.log(SignupInput.name)

    const navigate = useNavigate();

        const handleSubmit = (e) => {
            e.preventDefault()
            localStorage.setItem("user", JSON.stringify(SignupInput)) 
            navigate("/")
        }

    return (
        <div>
            <div>
                <div className="h-20">
                </div>
                <form className='signupscreen' onSubmit={handleSubmit}>
                    <div className='mainSignup'>
                        <div className='namedivSignup'>
                            <p className='namepSignup'>Name</p>
                            <input className='nameinputSignup' type='name' name="name" id="name" placeholder='Name' autoComplete="off" value={SignupInput.name} onChange={(e) => setSignupInput({
                                ...SignupInput,
                                [e.target.name]: e.target.value,
                            })} />
                        </div>
                        <div className='emaildivSignup'>
                            <p className='emailpSignup'>Email</p>
                            <input className='emailinputSignup' type='email' name="email" id="email" placeholder='Email' autoComplete="off" value={SignupInput.email} onChange={(e) => setSignupInput({
                                ...SignupInput,
                                [e.target.name]: e.target.value,
                            })}/>
                        </div>
                        <div className='passdivSignup'>
                            <p className='passwordpSignup'>Password</p>
                            <input className='passinputSignup' type='text' name="password" id="password" placeholder='Password' autoComplete="off" value={SignupInput.password} onChange={(e) => setSignupInput({
                                ...SignupInput,
                                [e.target.name]: e.target.value,
                            })} />
                        </div>
                        <div className='btnloginSignup'>
                            <button className='loginbtnSignup' type="submit">Signup</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
