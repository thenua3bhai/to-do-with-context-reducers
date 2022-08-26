import React, { useContext, useEffect } from "react";
import useInputState from "./hooks/useInputState";
import { v4 as uuidv4 } from "uuid";
import { Box, Button, TextField } from "@mui/material";
import { DispatchContext } from "./context/todoContext";

function ToDoForm(props) {
  const dispatch = useContext(DispatchContext);
  const [valuee, updateValuee, reset] = useInputState("");
  useEffect(() => {
    console.log("ToDO Form render");
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (valuee) {
      dispatch({
        type: "ADD",
        todo: { id: uuidv4(), task: valuee, isDone: false },
      });
      reset();
    }
  };

  return (
    <div>
      <Box
        component="form"
        onSubmit={handleSubmit}
        style={{ padding: "0 1rem", margin: "1rem 0" }}
      >
        {" "}
        <TextField
          fullWidth
          variant="standard"
          label="Add To Do"
          value={valuee}
          onChange={updateValuee}
          style={{ marginLeft: "20px", marginRight: "20px" }}
          margin="normal"
        ></TextField>
        <Button
          varient="outlined"
          onClick={handleSubmit}
          style={{
            color: "white",
            backgroundColor: "green",
            marginLeft: "0.5rem",
            marginTop: "0.5rem",
          }}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
}

export default ToDoForm;
