import { useContext } from 'react'
import { Link } from "react-router-dom";
import Profile from "./Profile";
import { StateContext } from '../state';

const Header = () => {

    const { showProfile, toggleProfile  } = useContext(StateContext)

  return (
    <div className="bg-blue-500 flex justify-between items-center pr-10 pl-10 text-white h-16">
    <Link to={"/login"}>Login</Link>
        <div className="border-2 border-black rounded-full w-14 h-14">
          <button onClick={toggleProfile}>
          <img src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png" alt="" />
          </button>
          {showProfile ? <Profile /> : null}
        </div>
      </div>
  )
}

export default Header
