import { useContext } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import ColorBox from "./components/ColorBox/ColorBox";
import Header from "./components/Header/Header";
import CircleText from "./components/CircleText/CircleText";
import ParagraphAPI from "./components/ParagraphAPI/ParagraphAPI";
import PlusSign from "./components/PlusSign/PlusSign";
//import the context we created
import { Context } from "./ContextProvider";
import StarFlower from "./components/StarFlower/StarFlower";

function App() {
	// saying we want to use the varieble mixColors from context
	const { mixColors } = useContext(Context);

	return (
		<main>
			<Header />
			<Button />
			<section id="section1" className="site-section section1">
				<div className="section1__text-wrapper">
					<h1 className="section1__main-title">2 COLOR WEB</h1>
					<p>
						Emmet is great for that. With it installed in the code editor you are
						using, you can type “lorem” and then tab and it will expand into a
						paragraph of Lorem Ipsum placeholder text. But it can do more! You can
						control how much you get, place it within HTML structure as it expands,
						and get different bits of it in repeated elements.
					</p>
				</div>
				<CircleText />
			</section>
			<section id="section2" className="site-section section2">
				<ColorBox color={mixColors.one} />
				<PlusSign />
				<ColorBox color={mixColors.two} />
			</section>

			<section id="section3" className="site-section section3">
				{/* <StarFlower /> */}
				<ParagraphAPI />
			</section>
		</main>
	);
}

export default App;
