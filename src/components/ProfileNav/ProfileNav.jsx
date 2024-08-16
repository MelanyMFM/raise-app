import { useState } from 'react';
import './profileNav.css';
import ExitIcon from "./../../assets/exit_icon.svg";
import { useNavigate } from 'react-router-dom';
import DefProfileImg from "./../../assets/honey.png"; // "./../../assets/blank-profile-picture.svg";

const ProfileNav = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const logout = () => {
    localStorage.removeItem('user'); 
    navigate('/');
    location.reload();
  };

  return (
    <div className="profile">
      <button onClick={toggleDropdown} className='amarillo'>
        <div className='username'>@{ user.name }</div>
        <div className='right-container'><img className="profile-img" src={(user.image == null || user.image === '') ? DefProfileImg: user.image} alt="" /><span>v</span> </div>
      </button>
      {isOpen && (
        <ul className="drop" style={{listStyleType: 'none'}}>
          <li><p>Profile Settings</p></li>
          <li><p className='logout' onClick={logout}>Logout <img src={ExitIcon} alt="" /></p></li> 
        </ul>
      )}
    </div>
  );
};

export default ProfileNav;
