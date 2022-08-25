import { createContext, useState } from "react";

const ChildContext = createContext();

export default ChildContext;

export function ChildProvider({ children }) {
  const [child, setChild] = useState({})

  const updateChild = (child) => {
    setChild(child)
    //console.log('context changed', child)
  }
  return (
    <ChildContext.Provider value={{ child, updateChild }}>
      {children}
    </ChildContext.Provider>
  )
}