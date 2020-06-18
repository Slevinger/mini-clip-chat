import React, { useReducer } from "react";

// a context constructor that uses reducer
// params :
//  reducer : a reducer function
//  actions : a list of actions that are based on that reducer's dispatch
//  defaultValues: the context's initialState

export default (reducer, actions, defaultValues) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValues);

    const boundActions = Object.keys(actions).reduce(
      (acc, key) => ({
        ...acc,
        [key]: actions[key](dispatch)
      }),
      {}
    );
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
