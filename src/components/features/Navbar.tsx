"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navLinks } from "../lib/data";
import { Navlink, SearchBar } from "../lib/helper";

const Navbar = () => {
	const pathname = usePathname();
	const [sticky, setSticky] = useState("");

	const stickyHandler = () => {
		const stickyClass = window.scrollY > 150 ? "stickier" : "bg-white";
		setSticky(stickyClass);
	};

	useEffect(() => {
		window.addEventListener("scroll", stickyHandler);
		return () => window.removeEventListener("scroll", stickyHandler);
	}, []);

	return (
		<div className={sticky}>
			<div className="container mx-auto">
				<div className="flex items-center justify-between">
					<nav className="flex items-center gap-12">
						<Link href="/">
							<Image src="/assets/logo-dark.png" alt="Zoya" width={96} height={26} />
						</Link>

						<ul className="flex gap-2">
							{navLinks?.map((navLink) => (
								<li className="nav-item" key={navLink.id}>
									<Link
										href={navLink.link}
										className={`nav-link ${pathname === navLink.link ? "active" : ""}`}
									>
										{navLink.name}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<div className="flex items-center gap-4">
						<SearchBar />
						<span>|</span>
						<Navlink />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
