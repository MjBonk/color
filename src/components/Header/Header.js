import { IoIosColorPalette } from "react-icons/io";
import { TbDroplet } from "react-icons/tb";
import { TbDropletFilled } from "react-icons/tb";
import "./Header.css";

function Header() {
	return (
		<header className="header">
			<div>
				{/* <IoIosColorPalette className="logo" /> */}
				<TbDroplet className="logo" />
				<TbDropletFilled className="logo" />

			</div>
		</header>
	);
}

export default Header;
