import React, { useState } from "react";
import ColorBox from "./ColorBox";
// IMPORTING UUIDV4
import { v4 as uuidv4 } from "uuid";
// INITIALIZING `uuidv4` by calling it
uuidv4();

// search-bar color code: bg-[#efefef], might not need

const Content = () => {
  const [colorVal, setColorVal] = useState("");
  const [colors, setColors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    colorVal !== ""
      ? setColors([...colors, colorVal])
      : alert("Please enter the hex color code for displaying the color");

    setColorVal("");
  };

  return (
    // CONTENT WRAPPER
    <div className=" flex flex-col items-center">
      {/* FORM--START */}
      <div className="mb-[5rem] mt-[2rem] shadow-custom-search">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              setColorVal(e.target.value);
            }}
            value={colorVal}
            type="text"
            placeholder="Enter the color code along with `#`, `rgb` or `rgba` prefixes, `hsl` inputs are not supported"
            className=" h-[48px] w-[560px] rounded-[6px] tracking-wide outline-none text-center text-[.7rem] "
          />
        </form>
      </div>
      {/* FORM--END */}

      {/* COLOR SWATCHES--START */}
      <div className="flex justify-center flex-wrap gap-4 pl-4 pr-4 mb-[2rem]">
        {colors !== [] || colors !== undefined ? (
          colors.map((color) => {
            return <ColorBox key={uuidv4()} colorCode={color} />;
          })
        ) : (
          <></>
        )}
      </div>
      {/* COLOR SWATCHES--END */}
    </div>
  );
};

export default Content;
