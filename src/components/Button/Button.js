import { useContext, useEffect, useState } from "react";
import { Context } from "../../ContextProvider";
import chroma from "chroma-js";
import "./Button.css";
import Header from "../Header/Header";

function Button() {
	const [buttonText, setButtonText] = useState("START");
	const { mixColors, setMixColors, primaryColor, setColor, accentColor, setBW, resetToggles } = useContext(Context);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			document.documentElement.style.setProperty("--clr-primary", primaryColor);
		}, 1000); // delay time in milliseconds
		return () => clearTimeout(timeoutId);
	}, [primaryColor]);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			document.documentElement.style.setProperty("--clr-accent", accentColor);
		}, 1000);
		return () => clearTimeout(timeoutId);
	}, [accentColor]);

	function handleOnClick() {
		const section1Position = document.getElementById("section1").getBoundingClientRect();
		const section2Position = document.getElementById("section2").getBoundingClientRect();
		const section3Position = document.getElementById("section3").getBoundingClientRect();
		const header = document.querySelector(".header");
		const scrollDistance = document.documentElement.clientHeight;

		if (section1Position.top === 0) {
			// go to page 2
			window.scrollBy(0, scrollDistance);
			setButtonText("MIX");
			header.style.top = `-${header.getBoundingClientRect().height}px`;
		} else if (section2Position.top === 0) {
			// go to page 3
			setColor(chroma.mix(mixColors.one, mixColors.two).hex());
			header.style.top = "0px";

			window.scrollBy(0, scrollDistance);
			setButtonText("RESTART");
		} else if (section3Position.top === 0) {
			// go to page 1
			window.scrollTo(0, 0);
			setButtonText("START");
			setColor("#FFFFFF");
			resetToggles();

			const timeoutId = setTimeout(() => {
				setMixColors({ one: "#000000", two: "#FFFFFF" });
			}, 1000);
			return () => clearTimeout(timeoutId);
		}
	}

	return (
		<button onClick={handleOnClick} className="main-button">
			{buttonText}
		</button>
	);
}

export default Button;
