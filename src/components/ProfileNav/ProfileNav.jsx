import React, { useState } from 'react';

const ProfileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profile">
      <button onClick={toggleDropdown} className="arriba">
        Menú
      </button>
      {isOpen && (
        <ul className="drop">
          <li><p>Profile Settings</p></li>
        </ul>
      )}
    </div>
  );
};

export default ProfileNav;
