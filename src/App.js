import { useContext } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import ColorBox from "./components/ColorBox/ColorBox";
import Header from "./components/Header/Header";
import CircleText from "./components/graphic-elements/CircleText/CircleText";
import ParagraphAPI from "./components/ParagraphAPI/ParagraphAPI";
import PlusSign from "./components/graphic-elements/PlusSign/PlusSign";
//import the context we created
import { Context } from "./ContextProvider";
import StarFlower from "./components/graphic-elements/StarFlower/StarFlower";
import Toggle from "./components/Toggle/Toggle";
import Domino from "./components/graphic-elements/Domino/Domino";
import StaggeringAnimation from "./components/graphic-elements/StaggeringAnimation/StaggeringAnimation";
import HexDisplay from "./components/HexDisplay/HexDisplay";
import FormText from "./components/graphic-elements/FormText.js/FormText";
import VerticalMarquee from "./components/graphic-elements/VerticalMarquee/VerticalMarquee";
import FollowCircle from "./components/graphic-elements/FollowCircle/FollowCircle";

function App() {
	// saying we want to use the varieble mixColors from context
	const { mixColors } = useContext(Context);

	return (
		<main>
			<Header />
			<Button />
			<section id="section1" className="site-section section1">
				<div className="section1__text-wrapper">
					<h1 className="section1__main-title">COLOR ME TWICE</h1>
					<p>
						Color Me Twice has been designed to assist you in creating an 2 color
						palette for your upcoming web development project. By selecting two
						colors, Color Me Twice will provide you based on your choice of colors,
						a primary color and its accompanying accent shade, resulting in a
						visually cohesive two-color composition.
						<br />
						<br />
						<span>
							How you do it, it's easy as 1, 2, 3. <br />
							1: Press start
							<br /> 2: Choose your colors
							<br /> 3: Press mix and see the result
						</span>
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
				<VerticalMarquee />
				<HexDisplay className={"primary-hex-display"} />
				<HexDisplay className={"accent-hex-display"} />
				<div className="title-textAI">
					<h1>YOU COLORED ME TWICE!</h1>
					<br/>
					<ParagraphAPI />
				</div>

				<div className="toggles">
					<div>
						<p>B / W</p>
						<Toggle BW={true} />
					</div>

					<div>
						<p>SWITCH</p>
						<Toggle BW={false} />
					</div>
				</div>

				<StaggeringAnimation />
				<FollowCircle />
			</section>
		</main>
	);
}

export default App;
