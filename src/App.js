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

function App() {
	// saying we want to use the varieble mixColors from context
	const { mixColors } = useContext(Context);

	return (
		<main>
			<Header />
			<Button />
			<section id="section1" className="site-section section1">
				<div className="section1__text-wrapper">
					<h1 className="section1__main-title">I'M A TITLE</h1>
					<p>
						I'm some intro text I'm some intro text I'm some intro text I'm some intro text I'm some intro text I'm some intro text I'm some intro text I'm some intro text 
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
				<StarFlower />
				<div className="marquee"></div>

				<HexDisplay className={"primary-hex-display"} />

				<div className="dividerNilas">
					<Domino />
				</div>

				<HexDisplay className={"accent-hex-display"} />

				<div className="title-toggles-textAI">
					<h1>TITLE</h1>
					<Toggle BW={true} />
					<Toggle BW={false} />
					<ParagraphAPI />
				</div>
				<div className="Circle"></div>
				<div className="textinput"></div>
				<div className="carmela">
					<StaggeringAnimation />
				</div>
				<div className="bigword">BIG WORD</div>
			</section>
		</main>
	);
}

export default App;
