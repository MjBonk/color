import { createContext, useState, useEffect } from "react";

// We’re exporting Context because this is what we use to refrence when we want the access to
// the values in here. ex const { mixColors } = useContext(Context) <----- in the brackets
export const Context = createContext();

function ContextProvider({ children }) {
	// here we create our variebles/function etc that we want acces to everywhere
	const [mixColors, setMixColors] = useState({ one: "#000000", two: "#FFFFFF" });
	const [primaryColor, setPrimaryColor] = useState("#FFFFFF");

	function useGetComplementaryColor(mixColor) {
		const [complementaryColor, setComplementaryColor] = useState("#000000");
		/* This step involves mapping over the RGB array and subtracting each
		   component from 255. This effectively calculates the complementary RGB values.*/
		const calculateComplementaryColor = (hexColor) => {
			// Constructing the complementary hex color
			const rgb = hexColor
				.slice(1)
				.match(/.{1,2}/g)
				.map((hex) => parseInt(hex, 16));
			const complementaryRGB = rgb.map((value) => 255 - value);
			const complementaryHex =
				"#" + complementaryRGB.map((value) => value.toString(16).padStart(2, "0")).join("");
			return complementaryHex;
		};

		useEffect(() => {
			const complementaryHexColor = calculateComplementaryColor(mixColor);
			setComplementaryColor(complementaryHexColor);
		}, [mixColor]);

		return complementaryColor;
	}

	const accentColor = useGetComplementaryColor(primaryColor);

	// here we put all the stuff if one varieble that we then pass as the value when returning the component,
	// instead of making multible "Context.Provider"
	const value = {
		mixColors,
		setMixColors,
		primaryColor,
		setPrimaryColor,
		accentColor,
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default ContextProvider;
