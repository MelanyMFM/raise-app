import { useState } from 'react';
import PropTypes from 'prop-types'; // Import prop-types library
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

  const handleUserTypeConf = () => {
    if (user.type === "ENTREPRENEUR") {
      navigate(`/myBusinesses/${user.id}`);
    } else if (user.type === "INVESTOR") {
      navigate(`/myInvestments/${user.id}`);
    } else {
      console.error('User type not defined');
    }
  }

  const handleProfileSettings = () => {
    navigate(`/users/edit/${user.id}`);
  }


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
          <li onClick={ handleUserTypeConf }>{user.type === "ENTREPRENEUR" ? <><p>Your business</p></> 
          : user.type === "INVESTOR" ? <><p>Your Investments</p></>
          :<><p>User rol not defined</p></>}
          </li>
          <li onClick={handleProfileSettings}>
            <p className='profile-settings'>Profile Settings</p>
          </li>
          <li>
            <p className='logout' onClick={logout}>Logout <img src={ExitIcon} alt="" /></p>
          </li> 
        </ul>
      )}
    </div>
  );
};

ProfileNav.propTypes = {
  user: PropTypes.shape({
    image: PropTypes.string, // Add prop type validation for 'user.image'
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired
};

export default ProfileNav;
