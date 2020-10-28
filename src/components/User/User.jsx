import React, {useContext, useEffect} from 'react'
import { CartContext } from '../../Context/CartContext'
import ChangeUserName from './ChangeUserName'

export default function User(props) {
  const {currentUser, setCurrentUser} = useContext(CartContext)

  useEffect(() => {
    if(props.username) {
      setCurrentUser(props.username)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    
    <div className="text-white float-right">
      <ChangeUserName />
      {currentUser === "Visitor" ? "Not Logged in" : "logged in as " + currentUser} 
    </div>
  )
}
