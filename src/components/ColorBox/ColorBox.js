import "./ColorBox.css";
import { HuePicker } from "react-color";
import { useState } from "react";

function ColorBox() {
	const [colors, setColors] = useState("");

	function handleOnChange(color) {
		setColors(color.hex);
	}

	return (
		<div className="color-box">
			<HuePicker color={colors} onChange={handleOnChange} />
			{/* <SliderPicker /> */}
		</div>
	);
}

export default ColorBox;
