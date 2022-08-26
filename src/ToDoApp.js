import React from "react";
import Paper from "@mui/material/Paper";
import NavBar from "./NavBar";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import { Grid } from "@mui/material";

// import { ToDoContext } from "./context/todoContext";

function ToDoApp() {
  //yha useContext se ya useReducer se state milti h agr hm use lete h to wo jb bj chnage hogi apne compnenet ko and uske childs ko re render karwayegi isiliye soch samjh ke use kre
  // const state = useContext(ToDoContext); //yha use kar rhe h ie. ToDoApp component ko iske kisi parent m
  // <ToDoProvder></ToDoProvider> m wrap karna padega abhi ham App.js m wrap kar rhe h taki ToDoApp upar ki
  //tarf dekhe to use context mil jaye

  // useEffect(() => {
  //   window.localStorage.setItem("state", JSON.stringify(state));
  // }, [state]);

  return (
    <Paper style={{ margin: "0", padding: "1rem", height: "100vh" }}>
      {" "}
      <NavBar />
      <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={7} lg={7}>
          <ToDoForm /> <ToDoList />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ToDoApp;
