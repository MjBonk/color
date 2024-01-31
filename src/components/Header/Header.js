import { IoIosColorPalette } from "react-icons/io";
import "./Header.css";

function Header() {
	// const section1Position = document.getElementById("section1").getBoundingClientRect();
	// const section2Position = document.getElementById("section2").getBoundingClientRect();
	// const section3Position = document.getElementById("section3").getBoundingClientRect();

	// let header = document.querySelector(".header");
	// console.log(header);

	// if (section1Position.top === 0) {
	// } else if (section2Position.top === 0) {
	// } else if (section3Position.top === 0) {
	// }

	return (
		<header className="header">
			<IoIosColorPalette className="logo" />
			<p>im some other stuff</p>
		</header>
	);
}

export default Header;
