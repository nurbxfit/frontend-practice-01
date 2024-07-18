import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../components/Header";

export const Route = createRootRoute({
	component: () => (
		<>
			<div className="overflow-hidden bg-gradient-to-r from-blue-500 to-pink-500 h-screen">
				<Header />
				<Outlet />
				{/* <TanStackRouterDevtools /> */}
			</div>
		</>
	),
});
