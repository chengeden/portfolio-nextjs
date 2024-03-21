"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const navLinks = [
	{
		title: "About",
		path: "#about",
	},
	{
		title: "Projects",
		path: "#projects",
	},
	{
		title: "Contact",
		path: "#contact",
	}
];

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);

	return (
		<nav className="fixed mx-auto border-b border-[#33353F] top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-100">
			<div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2 lg:py-4">
				<div className="socials flex flex-row gap-2">
					<Link href="https://github.com/chengeden" passHref legacyBehavior>
						<a target="_blank">
							<Image src={GithubIcon} alt="Github Icon" className="h-12 w-12" />
						</a>
					</Link>
					<Link href="https://linkedin.com/in/eden-cheng" passHref legacyBehavior>
						<a target="_blank">
							<Image src={LinkedinIcon} alt="Linkedin Icon" className="h-12 w-12" />
						</a>
					</Link>
				</div>
				<Link href={"/"} className="text-4xl md:text-6xl text-white font-semibold font-whisper">
					Eden
				</Link>
				<div className="mobile-menu block md:hidden">
					{!navbarOpen ? (
						<button
							onClick={() => setNavbarOpen(true)}
							className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
						>
							<Bars3Icon className="h-5 w-5" />
						</button>
					) : (
						<button
							onClick={() => setNavbarOpen(false)}
							className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
						>
							<XMarkIcon className="h-5 w-5" />
						</button>
					)}
				</div>
				<div className="menu hidden md:block md:w-auto" id="navbar">
					<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
						{
							navLinks.map((link, index) => (
								<li key={index}>
									<NavLink href={link.path} title={link.title} />
								</li>
							))
						}
					</ul>
				</div>
			</div>
			{navbarOpen ? <MenuOverlay links={navLinks} /> : null}
		</nav>
	);
};

export default Navbar;