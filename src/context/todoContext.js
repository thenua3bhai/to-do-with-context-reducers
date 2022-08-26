import { createContext, useReducer, useEffect } from "react";
import reducer from "../reducers/todoReducer";

export const ToDoContext = createContext();
export const DispatchContext = createContext(); //splitting taki state ya dispatch m jo bhi change ho bs
//usike context ki value change ho ,dusre ki value ki change hone se context ki value property change hoti h
//to usse extra rendring hoti h chunki usme jo bhi compunents wrapped h unki
export function ToDoProvider(props) {
  const initialToDos = JSON.parse(window.localStorage.getItem("state") || "[]"); //agr state key se value nhi
  //mili to undefined aayega jo
  //JSON.parse m error dega isilie acha rhega ye statement try catch m wrap kiya jaye
  const [state, dispatch] = useReducer(reducer, initialToDos);
  useEffect(() => {
    window.localStorage.setItem("state", JSON.stringify(state));
  }, [state]);
  return (
    <ToDoContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </ToDoContext.Provider>
  );
}
