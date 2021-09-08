import { createContext, useState } from "react";

const Context = createContext({})

export function BikesContextProvider({ children }) {
    const [bikes, setBikes] = useState([])

    return <Context.Provider value={{ bikes, setBikes }}>
        {children}
    </Context.Provider>
}

export default Context;
