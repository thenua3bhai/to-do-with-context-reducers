import React, { useContext } from "react";
import { List, Paper, Divider, ListItem } from "@mui/material";
import ToDo from "./ToDo";
import { ToDoContext } from "./context/todoContext";

function ToDoList() {
  const state = useContext(ToDoContext);
  if (state.length) {
    //agr koi todo hi to null return kara denge 0 legthm m khali paper aata h chhota sa annoying
    return (
      <Paper>
        <List>
          {state.map((todo, index) => {
            return (
              <div key={todo.id}>
                <ListItem>
                  <ToDo todo={todo} />
                </ListItem>
                {index < state.length - 1 ? (
                  <Divider variant="inset" component="li" />
                ) : null}
              </div>
            );
          })}
        </List>
      </Paper>
    );
  }
  return null; //agr koi todo hi to null return kara denge 0 legthm m khali paper aata h chhota sa annoying
}

export default ToDoList;
