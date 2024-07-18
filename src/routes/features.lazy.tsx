import { createLazyFileRoute } from "@tanstack/react-router";
import BackgroundImage from "../assets/backgrounds/featuresBg.svg";
import MacBookPro from "../assets/macbook.svg";
import DiamondIcon from "../assets/diamond.svg";
import CopyIcon from "../assets/copy.svg";

export const Route = createLazyFileRoute("/features")({
	component: About,
});

function About() {
	return (
		<div
			className="bg-cover h-screen text-white text-pretty"
			style={{
				backgroundImage: `url(${BackgroundImage})`,
			}}
		>
			<div className="relative top-28">
				<div className="h-screen flex lg:items-center">
					<img className="hidden lg:block " width={483.3} src={MacBookPro} />
					<div className="mx-auto p-10 lg:p-20 lg:w-4/6   ">
						<h1 className="font-semibold text-4xl ">We create Something New</h1>
						<p className="text-2xl mt-8 lg:w-3/4 ">
							We have created a new product that will help designers, developers
							and companies create websites for their startups quickly and
							easily.
						</p>
						<div className="lg:my-10 my-5 flex flex-col gap-8 lg:flex-row ">
							<div>
								<img src={CopyIcon} alt="double-rect" />
								<h2 className="uppercase font-bold lg:my-10 my-5">
									30 new feature pages
								</h2>
								<p className="lg:w-3/4">
									Startup Framework contains components and complex blocks which
									can easily.{" "}
								</p>
							</div>
							<div>
								<img src={DiamondIcon} alt="diamond" />
								<h2 className="uppercase font-bold lg:my-10 my-5">
									useful symbol components
								</h2>
								<p className="lg:w-3/4">
									Samples will show you the feeling on how to play around using
									the components.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
