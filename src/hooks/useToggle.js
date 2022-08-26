import React, { useState } from "react";

function useToggle(intialVal = false) {
  //ye hook h React component nhi isiliye small letter se & use suru h ,,aur kahi render nhi ho skta..
  //chuunki ye component nhi isiliye React ka bhi use nhi kiya wo yellow ho rha isiliye ..
  //React comaponent function ke nam Capital se hi suru hote h nhi to eror aati h..
  //and wo kahi renderbhi hote h
  const [state, setState] = useState(intialVal);
  const toggle = () => {
    setState(!state);
    // console.log(
    //   "m useToggle hook ka toggle function call hua meri state value h : ",
    //   state
    // );
  };
  // console.log(
  //   "m useToggle hook ke toggle function ke bahar hu  mere pass ab state value h : ",
  //   state
  // );
  return [state, toggle];
}

export default useToggle;
