import React from "react";

const CardProvider = ({ handleClick = () => console.log("Login with Provider"), iconProvider }) => {
  return (
    <>
      <div
        className="card-provider"
        style={{ boxShadow: "0 0 16px rgba(0,0,0,0.1)" }}
        onClick={() => handleClick()}
      >
        {iconProvider}
      </div>
    </>
  );
};

export default CardProvider;
