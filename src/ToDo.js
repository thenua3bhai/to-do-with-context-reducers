import { Button, Checkbox, ListItemSecondaryAction } from "@mui/material";
import React, { useContext, memo } from "react";
import EditToDoForm from "./EditToDoForm";
import useToggle from "./hooks/useToggle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { flexbox } from "@mui/system";
import { DispatchContext } from "./context/todoContext";

function ToDo(props) {
  const [state, toggle] = useToggle(false);
  const dispatch = useContext(DispatchContext);
  const removToDo = () => {
    dispatch({ type: "REMOVE", id: props.todo.id });
  };
  return (
    <div>
      {state ? (
        <EditToDoForm todo={props.todo} toggleEditForm={toggle} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={props.todo.isDone}
            onChange={() => {
              dispatch({ type: "TOGGLE", todo: props.todo });
            }}
          />
          <span
            style={{
              textDecoration: props.todo.isDone ? "line-through" : "none",
              display: flexbox,
            }}
          >
            {props.todo.task}
          </span>
          <ListItemSecondaryAction>
            <Button onClick={toggle}>
              <EditIcon />
            </Button>
            <Button onClick={removToDo} color="warning">
              <DeleteIcon />
            </Button>
          </ListItemSecondaryAction>
        </>
      )}
    </div>
  );
}
export default memo(ToDo);
//iski help se is component m wahi compnnet render honge jiske context ki value change hogi
//dispatch to dispatch use karne wale and state change hua to state use karne wale re render honge
//sb nhi  for details see video React 286
