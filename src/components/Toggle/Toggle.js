import { useEffect, useState, useContext } from "react";
// npm install react-switch
import Switch from "react-switch";
import { Context } from "../../ContextProvider";

export default function Toggle(props) {
	const { accentColor, primaryColor, setBW, setInvert } = useContext(Context);

	const [checked, setChecked] = useState(false);

	useEffect(() => {
		if (props.BW) {
			if (checked) {
				// Store the original primary color only the first time the switch is activated
				//setOriginalColor("#FFFFFF");
				setBW(true);
			} else {
				// When the switch is turned off, restore the original primary color
				setBW(false);
			}
		} else {
			if (checked) {
				// Store the original primary color only the first time the switch is activated
				setInvert(true);
			} else {
				// When the switch is turned off, restore the original primary color
				setInvert(false);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
