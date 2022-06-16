import React, { forwardRef } from "react";
import classes from "./MyInput.module.css";

const MyInput = forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref} {...props} className={classes.myInput} />
    </div>
  );
});

export default MyInput;
