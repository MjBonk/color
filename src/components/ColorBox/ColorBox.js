import "./ColorBox.css";
import { HuePicker } from "react-color";

function ColorBox() {

	function handleOnChange(color) {
		console.log(color.hex);
	}

	return (
		<div className="color-box">
			<HuePicker />
			{/* <SliderPicker /> */}
		</div>
	);
}

export default ColorBox;
