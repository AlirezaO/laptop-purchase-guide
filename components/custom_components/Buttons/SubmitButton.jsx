"use client";

export const SubmitButton = ({ type = "button" }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("CLICKED!!!");
  };
  return (
    <button type={type} className="submit-button-class" onClick={handleClick}>
      Submit
    </button>
  );
};
