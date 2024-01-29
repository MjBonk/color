function Button() {
	function handleOnClick() {
		const section1Position = document.getElementById("section1").getBoundingClientRect();
		const section2Position = document.getElementById("section2").getBoundingClientRect();
		const section3Position = document.getElementById("section3").getBoundingClientRect();

		let scrollDistance = document.documentElement.clientHeight;

		if (section1Position.top === 0) {
			console.log("page go to 2");
			window.scrollBy(0, scrollDistance);

		} else if (section2Position.top === 0) {
			console.log("page go to 3");
			window.scrollBy(0, scrollDistance);

		} else if (section3Position.top === 0) {
			console.log("page go to 1");
			window.scrollTo(0, 0);
		}

		// console.log(document.documentElement.scrollTop)
	}

	return (
		<button onClick={handleOnClick} className="main-button">
			test
		</button>
	);
}

export default Button;
