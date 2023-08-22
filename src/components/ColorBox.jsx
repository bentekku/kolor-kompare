import React from "react";

const ColorBox = (color) => {
  // CREATING A VARIABLE TO STORE DYNAMIC VALUE INPUTS BY THE USER
  const colorString = `bg-${color.colorCode}`;
  // console.log(colorString); // FOR DEBUGGING

  return (
    <div
      className={
        `w-[250px] h-[250px] rounded-[15px] shadow-custom-color-box `
        // +colorString
      }
      style={{ backgroundColor: color.colorCode }}
    >
      {/* TEXT WRAPPER */}
      <div className="grid place-content-center h-full">
        <p className="text-custom-md text-black font-custom-md">
          Lorem, ipsum.
        </p>
        <p className="text-custom-md text-white font-custom-md">
          Lorem, ipsum.
        </p>
      </div>
    </div>
  );
};

export default ColorBox;
