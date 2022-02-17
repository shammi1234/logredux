import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../Features/UserSlice';
import './Logout.css'

const Logout = (props) => {

    const users= useSelector(selectUser)
    const dispatch= useDispatch()

   const  handleLogout=(e)=>{
       e.preventDefault();
dispatch(logout({

}))

   }
  return (
    <div className="logout">
<h1> welcome <span className="user_name">{users.name} </span></h1>
<button className="logout_button" onClick={(e)=> handleLogout(e)}> Logout</button>

    </div>
  )
}

export default Logout