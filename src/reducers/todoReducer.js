//using reducer sare functions ko ek hi function me dal diya sare dispatch se call ho ajeynge bs type dena h wow yhi reduce h
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.todo];
    case "REMOVE":
      return state.filter(function (value) {
        return value.id !== action.id;
      });
    case "EDIT":
      return state.map((obj) => {
        if (obj.id === action.todo.id) {
          return { ...obj, task: action.todo.task };
        }
        return obj;
      });
    case "TOGGLE":
      return state.map((obj) => {
        if (obj.id === action.todo.id) {
          return { ...obj, isDone: !action.todo.isDone };
        }

        return obj;
      });
    default:
      return state;
  }
};
export default reducer;
