import { Link } from "@tanstack/react-router";
import { navItems } from "../constants/nav";

const Header = () => {
	const renderView = () => (
		<div className="fixed top-20 left-0 w-full bg-transparent z-50">
			<nav className="flex items-center justify-center gap-9 text-white">
				{navItems.map((navItem) => (
					<Link
						key={navItem.id}
						to={navItem.url}
						className="[&.active]:text-gray-300"
					>
						{navItem.title}
					</Link>
				))}
			</nav>
		</div>
	);
	return renderView();
};

export default Header;
