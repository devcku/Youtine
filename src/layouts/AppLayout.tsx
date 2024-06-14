import { Outlet } from "react-router-dom";

const AppLayout = () => {
	return (
		<main className="fixed h-full w-full grid grid-cols-5 bg-zinc-50">
			<nav className="grid-cols-2 bg-zinc-100"></nav>
			<div className="col-span-3 p-4">
				<Outlet />
			</div>
		</main>
	);
};

export default AppLayout;
