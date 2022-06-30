import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logout } from '../features/useSlide';
import {selectUser} from '../features/useSlide'
import "./Logout.css"

const Logout = () => {

  const  dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout())
  }
  
  return (
    <div className="logout">
        <h1> Hello <span className="user_name">{user.name}</span>
          
        </h1>
            <button className="logout_btn" onClick={(e =>handleLogout(e))}>
            Logout
            </button>
    </div>
  )
}

export default Logout