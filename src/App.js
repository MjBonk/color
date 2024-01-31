import { useContext } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import ColorBox from "./components/ColorBox/ColorBox";
import Header from "./components/Header/Header";
import chroma from "chroma-js";

//import the context we created
import { Context } from "./ContextProvider";
import useAPI from "./Hooks/useAPI";

function App() {
	// saying we want to use the varieble mixColors from context
	const { mixColors, primaryColor, setPrimaryColor } = useContext(Context);


	return (
		<main>
			<Header />
			<Button />
			<section id="section1" className="site-section section1">
				<div className="text-wrapper">
					<h1>I'M A TITLE</h1>
					<p>
						Emmet is great for that. With it installed in the code editor you are
						using, you can type “lorem” and then tab and it will expand into a
						paragraph of Lorem Ipsum placeholder text. But it can do more! You can
						control how much you get, place it within HTML structure as it expands,
						and get different bits of it in repeated elements.
					</p>
				</div>
			</section>
			<section id="section2" className="site-section section2">
				{/* pass mixColors as props to the colorBoxes */}
				<ColorBox color={mixColors.one} />
				<ColorBox color={mixColors.two} />
			</section>

			<section
				id="section3"
				className="site-section section3"
			>
				3
			</section>
		</main>
	);
}

export default App;
