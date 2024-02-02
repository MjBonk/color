import { useEffect, useState, useContext } from "react";
// npm install react-switch
import Switch from "react-switch";
import { Context } from "../../ContextProvider";

export default function Toggle(props) {
	const { setPrimaryColor, accentColor, primaryColor } = useContext(Context);

	const [checked, setChecked] = useState(false);
	const [originalColor, setOriginalColor] = useState(primaryColor);

	useEffect(() => {
		if (props.BW) {
			if (checked) {
				// Store the original primary color only the first time the switch is activated
				setOriginalColor("#FFFFFF");
				setPrimaryColor("#000000");
			} else {
				// When the switch is turned off, restore the original primary color
				setPrimaryColor(originalColor);
			}
		} else {
			if (checked) {
				// Store the original primary color only the first time the switch is activated
				setOriginalColor(primaryColor);

				setPrimaryColor(accentColor);
			} else {
				// When the switch is turned off, restore the original primary color
				setPrimaryColor(originalColor);
			}
		}
	}, [checked]);

	const handleChange = (nextChecked) => {
		setChecked(nextChecked);
	};

	return (
		<label>
			<Switch
				onChange={handleChange}
				checked={checked}
				uncheckedIcon={false}
				checkedIcon={false}
				offColor={accentColor}
				onColor={accentColor}
				offHandleColor={primaryColor}
				onHandleColor={primaryColor}
			/>
		</label>
	);
}
