import { useContext, useEffect, useState } from "react";
import { Context } from "../../ContextProvider";
import chroma from "chroma-js";
import "./Button.css";
import Header from "../Header/Header";

function Button() {
	const [buttonText, setButtonText] = useState("START");
	const { mixColors, setMixColors, primaryColor, setPrimaryColor, accentColor } = useContext(Context);

	useEffect(() => {
		document.documentElement.style.setProperty("--clr-primary", primaryColor);
	}, [primaryColor]);

	document.documentElement.style.setProperty("--clr-accent", accentColor);

	function handleOnClick() {
		const section1Position = document.getElementById("section1").getBoundingClientRect();
		const section2Position = document.getElementById("section2").getBoundingClientRect();
		const section3Position = document.getElementById("section3").getBoundingClientRect();
		let header = document.querySelector(".header");
		console.log(header.getBoundingClientRect().height);

		let scrollDistance = document.documentElement.clientHeight;

		// go to page 2
		if (section1Position.top === 0) {
			window.scrollBy(0, scrollDistance);
			setButtonText("MIX");
			header.style.top = `-${header.getBoundingClientRect().height}px`;

			// go to page 3
		} else if (section2Position.top === 0) {
			// set primary color
			setPrimaryColor(chroma.mix(mixColors.one, mixColors.two).hex());
			header.style.top = "0px";

			//scrolls + button text change
			window.scrollBy(0, scrollDistance);
			setButtonText("RESTART");

			// go to page 1
		} else if (section3Position.top === 0) {
			window.scrollTo(0, 0);
			setButtonText("START");
			setPrimaryColor("#FFFFFF");
			setMixColors({ one: "#000000", two: "#FFFFFF" });
		}
	}

	return (
		<button onClick={handleOnClick} className="main-button">
			{buttonText}
		</button>
	);
}

export default Button;
