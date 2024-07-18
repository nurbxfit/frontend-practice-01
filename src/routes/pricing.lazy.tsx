import { createLazyFileRoute } from "@tanstack/react-router";
import BackgroundImage from "../assets/backgrounds/pricingBg.svg";
import CheckIcon from "../assets/checkIcon.svg";
import { PropsWithChildren } from "react";
import { features, plans } from "../constants/plans";

export const Route = createLazyFileRoute("/pricing")({
	component: Pricing,
});

function Pricing() {
	return (
		<div
			className="bg-cover h-screen text-white text-pretty"
			style={{
				backgroundImage: `url(${BackgroundImage})`,
			}}
		>
			<div className="relative top-28">
				<div className="h-screen pt-20 text-center  w-full">
					<h1 className="font-semibold text-4xl">Plans & Pricing</h1>
					<div className="text-2xl mt-8 mx-auto lg:w-2/6 ">
						<p>
							Startup Framework is free forever — you only pay for custom domain
							hosting or to export your site.
						</p>
					</div>
					<div className="flex gap-4 items-center justify-center mt-10">
						{plans.map((plan) => (
							<Plan key={plan.id} plan={plan} features={features} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

function Plan({
	plan,
	features,
}: PropsWithChildren & { plan: any; features: any[] }) {
	return (
		<div className="border border-1 rounded-lg p-10 flex flex-col gap-4 text-left hover:cursor-pointer transition-colors group hover:bg-pink-600">
			<h2 className="text-md font-semibold">{plan.name}</h2>
			<h3 className="text-5xl font-bold relative">
				{plan.price}
				<span className="text-sm font-normal absolute top-0 ">$</span>
			</h3>
			<ul className="font-light">
				{features.map((feature) => (
					<li key={feature.id} className="flex items-center gap-2">
						{plan.features.includes(feature.id) && (
							<img src={CheckIcon} alt="checkIcon" className="w-4 h-4" />
						)}
						<span
							className={`${plan.features.includes(feature.id) ? "ml-0" : "ml-6 text-gray-400"}`}
						>
							{feature.title}
						</span>
					</li>
				))}
			</ul>
			<div className="self-center">
				<button className="border rounded-full px-4 py-2 group-hover:border-pink-400 group-hover:bg-pink-800 hover:scale-105 transition-all ">
					Get started
				</button>
			</div>
		</div>
	);
}
