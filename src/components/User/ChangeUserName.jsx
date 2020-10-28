import React, {useContext} from 'react'
import { CartContext } from '../../Context/CartContext'

export default function ChangeUserName(props) {
  const {setCurrentUser} = useContext(CartContext)


  function handleChange (e) {
    setCurrentUser(e.target.value)
  }

  return (
    <>
      <form>
        <div className="form-group">
          <label>username: <input type="username" className="form-control" name="username" onChange={handleChange}></input></label>
        </div>
      </form>
    </>
  )
}