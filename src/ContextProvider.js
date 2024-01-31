import { createContext, useState } from "react";

// We’re exporting Context because this is what we use to refrence when we want the access to
// the values in here. ex const { mixColors } = useContext(Context) <----- in the brackets
export const Context = createContext();

function ContextProvider({ children }) {
	// here we create our variebles/function etc that we want acces to everywhere
	const [mixColors, setMixColors] = useState({ one: "#000000", two: "#FFFFFF" });

	// here we put all the stuff if one varieble that we then pass as the value when returning the component,
	// instead of making multible "Context.Provider"
	const value = {
		mixColors,
		setMixColors,
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default ContextProvider;
