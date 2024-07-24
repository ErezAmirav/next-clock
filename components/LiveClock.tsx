"use client";
import { NextPage } from "next";
import { useState } from "react";
import Clock from "react-live-clock";
import { HexColorPicker } from "react-colorful";



interface Props {}

const LiveClock: NextPage<Props> = ({}) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [color, setColor] = useState("#FF0000");

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen().catch((err) => {
        console.error(
          `Error attempting to exit full-screen mode: ${err.message} (${err.name})`
        );
      });
    }
  };
  return (
    <div>
      {showColorPicker && (
        <div className="absolute top-[50%] left-[50%] z-50 translate-x-[-50%] translate-y-[-50%]">
          <HexColorPicker
            color={color}
            onChange={setColor}
            className="bg-transparent"
          />
        </div>
      )}
      <div className="flex flex-col justify-center items-center text-center relative h-[100vh] w-[100%]">
        <h1
          className="text-[37vw]"
          style={{ color: color }}
          onClick={toggleColorPicker}
        >
          <Clock interval={1000} ticking={true} />
        </h1>
        <h3
          className="absolute text-[5vw] z-10 mt-[35%]"
          style={{ color: color }}
          onClick={toggleFullScreen}
        >
          <Clock format={"D.M.YY"} />
        </h3>
      </div>
    </div>
  );
};

export default LiveClock;
