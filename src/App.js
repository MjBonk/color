import "./App.css";
import Button from "./components/Button";

function App() {
	const goToSection = (sectionId) => () => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<>
			<main>
				<Button />
				<section id="section1" className="site-section section1">
					1
				</section>
				<section id="section2" className="site-section section2">
					2
				</section>
				<section id="section3" className="site-section section3">
					3
				</section>
			</main>
		</>
	);
}

export default App;
