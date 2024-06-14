import { Outlet } from "react-router-dom";
import {
	FireIcon,
	HomeIcon,
	MagnifyingGlassIcon,
	PlusIcon,
	UserIcon,
} from "@heroicons/react/20/solid";
import Home from "../pages/Home";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/20/solid";

const AppLayout = () => {
	return (
		<main className="fixed h-full w-full grid grid-cols-5 bg-zinc-50">
			<nav className="grid-cols-2 bg-zinc-100 flex flex-col gap-4  pt-10">
				<div className="pt-2 pb-8 border-b border-zinc-300 px-6">
					<button className="p-2 rounded bg-white text-zinc-500 w-max">
						<UserIcon className="h-6" />
					</button>
				</div>
				<ul className="flex flex-col gap-4 p-6 pb-8 text-zinc-500 font-semibold border-b border-zinc-300">
					<li className="flex gap-4 p-2 text-blue-500">
						<HomeIcon className="h-6" />
						Home
					</li>
					<li className="flex gap-4 p-2">
						<MagnifyingGlassIcon className="h-6" />
						Search
					</li>
					<li className="flex gap-4 p-2">
						<PlusIcon className="h-6" />
						Create Habit
					</li>
				</ul>
				<ul className="flex flex-col gap-4 p-6  text-zinc-500 font-semibold">
					<li className="flex gap-4 p-2">
						<div className="p-2 bg-white h-max rounded">
							<UserIcon className="h-6" />
						</div>
						<div className="flex-col">
							<h3 className="font-semibold">DanielTheCreator</h3>
							<div className="flex text-xs items-center gap-0.5 text-orange-600">
								<FireIcon className="h-4" /> 5 Days
							</div>
						</div>
					</li>
				</ul>
			</nav>
			<div className="col-span-3">
				<Outlet />
			</div>
		</main>
	);
};

export default AppLayout;
