import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { DispatchContext } from "./context/todoContext";
import useInputState from "./hooks/useInputState";

function EditToDoForm(props) {
  const dispatch = useContext(DispatchContext);
  const [valuee, updateValuee] = useInputState(props.todo.task);
  useEffect(() => {
    console.log("EDIT Form render");
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "EDIT", todo: { id: props.todo.id, task: valuee } });
    props.toggleEditForm();
  };

  return (
    <div>
      <Box
        component="form"
        onSubmit={handleSubmit}
        style={{ marginLeft: "1rem", width: "80%" }}
      >
        <TextField
          autoFocus
          type="text"
          variant="standard"
          placeholder="Edit now"
          value={valuee}
          onChange={updateValuee}
        ></TextField>
        <Button onClick={handleSubmit}>Change</Button>
      </Box>
    </div>
  );
}

export default EditToDoForm;
