import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import { closeIcone } from '../assets/index';

import state from "../store";

const ColorPicker = ({ colorPicked, handleCloseTab }) => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <img src={closeIcone} className="tab-close-btn" onClick={() => handleCloseTab()}/>
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => colorPicked(color)}
        // presetColors={['']}
        // onChange={(color) => (state.color = color.hex, console.log(color))}
      />
    </div>
  );
};

export default ColorPicker;
