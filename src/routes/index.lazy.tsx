import { createLazyFileRoute } from "@tanstack/react-router";
import BackgroundImage from "../assets/backgrounds/indexBg.svg";

export const Route = createLazyFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div
			className="bg-cover h-screen text-white text-pretty"
			style={{
				backgroundImage: `url(${BackgroundImage})`,
			}}
		>
			<div className="relative top-28">
				<div className="flex justify-center items-center ">
					<div className="text-center mt-32  w-1/2 lg:w-1/3 ">
						<h1 className="font-semibold text-lg">Startup 3</h1>
						<h2 className="font-semibold text-6xl py-10 tracking-wider">
							Forget About Code
						</h2>
						<h3 className=" text-lg">
							Startup Framework gives you complete freedom over your creative
							process — you don’t have to think about any technical aspects.
							There are no limits and absolutely no coding.{" "}
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}
