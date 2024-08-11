import { useContext } from 'react'
import { StateContext } from '../state'

function Profile() {

  const { SignupInput } = useContext(StateContext)

  return (
    <div>
    <div className='bg-white text-black border-4 border-black rounded-lg right-0 w-72 h-96 z-10 absolute'>
      <h1>Name: {SignupInput.name}</h1>
      
</div>
</div>
  )
}

export default Profile

