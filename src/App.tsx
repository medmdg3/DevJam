import React, { useState } from 'react';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      <div className={"arrow"}>&#9660;</div>
      {isOpen && (
        <div className="options">
          {/* List of options */}
          <div>Option 1</div>
          <div>Option 2</div>
          <div>Option 3</div>
          {/* Add more options as needed */}
        </div>
      )}
    </div>
  );
};

export default Dropdown;