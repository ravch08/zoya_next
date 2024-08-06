"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { SearchBar } from "../utils/helper";

const Navbar = () => {
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
							<Image src="/assets/logo-dark.png" alt="Zoya" width={100} height={40} />
						</Link>

						<ul className="flex gap-2">
							<li className="nav-item">
								<Link href="/" className="nav-link">
									HOME
								</Link>
							</li>
							<li className="nav-item">
								<Link href="about" className="nav-link">
									ABOUT
								</Link>
							</li>
							<li className="nav-item">
								<Link href="blogs" className="nav-link">
									BLOGS
								</Link>
							</li>

							<li className="nav-item">
								<Link href="contact" className="nav-link">
									CONTACT
								</Link>
							</li>
						</ul>
					</nav>

					<div className="flex items-center gap-4">
						<SearchBar />
						<span>|</span>
						<Link href="login">
							<svg viewBox="0 0 24 24" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
									clipRule="evenodd"
								/>
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
