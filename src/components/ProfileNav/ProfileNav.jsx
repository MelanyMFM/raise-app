import React, { useState } from 'react';
import './profileNav.css';


const ProfileNav = ({user}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const logout = () => {
    localStorage.removeItem('user'); 
    window.location.href = '/';
  };

  return (
    <div className="profile">
      <button onClick={toggleDropdown} className='amarillo'>
        {user.name } v
      </button>
      {isOpen && (
        <ul className="drop" style={{listStyleType: 'none'}}>
          <li><p>Profile Settings</p></li>
          <li><p className='logout' onClick={logout}>Logout</p></li> 
        </ul>
      )}
    </div>
  );
};

export default ProfileNav;
