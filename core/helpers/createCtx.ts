import React from "react";

export function createCtx<T>() {
  const Context = React.createContext<T | undefined>(undefined);

  function useCtx() {
    const contextIsDefined = React.useContext(Context);
    if (!contextIsDefined) {
      throw new Error("useCtx must be used within a Provider");
    }
    return contextIsDefined;
  }
  return [Context.Provider, useCtx] as const;
}
