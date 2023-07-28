import React from "react";

function Header({ handleModalToggle }) {
  return (
    <div className="m-5">
      <div>
        <button onClick={handleModalToggle}>Create Job</button>
      </div>
    </div>
  );
}

export default Header;
