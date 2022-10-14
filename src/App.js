import "./styles.css";
import { useCallback } from "react";
import useThunkReducer from "./useThunkReducer";

const initialState = {
  age: 29,
  name: "timothy"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_AGE":
      return { ...state, age: action.payload.age };
    case "CHANGE_NAME":
      return { ...state, name: action.payload.name };
    default:
      return state;
  }
};

const changeAge = (payload) => {
  return {
    type: "CHANGE_AGE",
    payload
  };
};

const changeName = (payload) => {
  return {
    type: "CHANGE_NAME",
    payload
  };
};

const testThunk = (dispatch) => {
  console.log("mofe ojo");
  dispatch(changeAge({ age: 42 }));

  setTimeout(() => {
    dispatch(changeName({ name: "brad" }));
  }, 3000);
};

export default function App() {
  const [state, dispatch] = useThunkReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>age: {state.age}</h1>
      <h2>Name: {state.name}</h2>

      <button onClick={() => dispatch(changeAge({ age: 30 }))}>
        change age
      </button>
      <button onClick={() => dispatch(changeName({ name: "pete" }))}>
        change name
      </button>
      <button onClick={() => dispatch(testThunk)}>test me</button>
    </div>
  );
}
