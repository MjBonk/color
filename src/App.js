import "./App.css";
import { useContext, useEffect } from "react";
import { Context } from "./ContextProvider";
//import the context we created

import Button from "./components/Button/Button";
import ColorBox from "./components/ColorBox/ColorBox";
import Header from "./components/Header/Header";
import CircleText from "./components/graphic-elements/CircleText/CircleText";
import ParagraphAPI from "./components/ParagraphAPI/ParagraphAPI";
import PlusSign from "./components/graphic-elements/PlusSign/PlusSign";
import Toggle from "./components/Toggle/Toggle";
import Domino from "./components/graphic-elements/Domino/Domino";
import StaggeringAnimation from "./components/graphic-elements/StaggeringAnimation/StaggeringAnimation";
import HexDisplay from "./components/HexDisplay/HexDisplay";
import VerticalMarquee from "./components/graphic-elements/VerticalMarquee/VerticalMarquee";
import FollowCircle from "./components/graphic-elements/FollowCircle/FollowCircle";

function App() {
	// saying we want to use the varieble color etc from context
	const { mixColors, BW, setBW, invert, setInvert } = useContext(Context);

	//relod the page make the scroll go up
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main>
			<Header />
			<Button />

			{/* _________________________________SECTION_1____________________________________________ */}
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
							<span className="bold">
								How you do it, it's easy as 1, 2, 3.
							</span>
							<br />
							<span className="bold">1:</span> Press start
							<br /> <span className="bold">2:</span> Choose your colors
							<br /> <span className="bold">3:</span> Press mix and see the
							result
						</span>
					</p>
				</div>
				<CircleText />
			</section>

			{/* _________________________________SECTION_2____________________________________________ */}
			<section id="section2" className="site-section section2">
				<ColorBox color={mixColors.one} />
				<PlusSign />
				<ColorBox color={mixColors.two} />
			</section>

			{/* _________________________________SECTION_3____________________________________________ */}
			<section id="section3" className="site-section section3">
				<VerticalMarquee />
				<HexDisplay className={"primary-hex-display"} />
				<HexDisplay className={"accent-hex-display"} />
				<div className="toggles">
					<Toggle value={BW} setValue={setBW} text={"B / W"} />
					<Toggle value={invert} setValue={setInvert} text={"SWITCH"} />
				</div>
				<div className="phone-domino">
					<Domino />
				</div>
				<ParagraphAPI />
				<StaggeringAnimation />
				<FollowCircle />
			</section>
		</main>
	);
}

export default App;
