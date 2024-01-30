import { useState } from "react";
import "./Button.css";

function Button() {
	const [buttonText, setButtonText] = useState("START");


	function handleOnClick() {
		const section1Position = document.getElementById("section1").getBoundingClientRect();
		const section2Position = document.getElementById("section2").getBoundingClientRect();
		const section3Position = document.getElementById("section3").getBoundingClientRect();

		let scrollDistance = document.documentElement.clientHeight;
		
		// button text = START
		// page go to 2
		if (section1Position.top === 0) {
			window.scrollBy(0, scrollDistance);
			setButtonText('MIX')

			// page go to 3
		} else if (section2Position.top === 0) {
			window.scrollBy(0, scrollDistance);
			setButtonText('RESTART')

			// page go to 1
		} else if (section3Position.top === 0) {
			window.scrollTo(0, 0);
			setButtonText('START')
		}
	}

	return (
		<button onClick={handleOnClick} className="main-button">
			{buttonText}
		</button>
	);
}

export default Button;
