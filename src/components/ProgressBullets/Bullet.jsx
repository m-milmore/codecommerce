import React from "react";
import "./Bullet.css";

const Bullet = ({label, icon, light, last}) => {
  return (
    <div className={`bullet-container ${last}`}>
      <div className={`bullet ${light}`}>
        <i className={`fa ${icon} ${last}`}></i>
      </div>
      <div className="bullet-label">
        <span>{label}</span>
      </div>
    </div>
  );
};

export default Bullet;
