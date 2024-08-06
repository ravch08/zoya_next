"use client";

import { useEffect, useState } from "react";

const ScrollTop = () => {
	const [scroller, setScroller] = useState("");

	const scrollClassHandler = () => {
		const scrollClass = window.scrollY > 150 ? "scrollTop scrollShow" : "scrollTop";
		setScroller(scrollClass);
	};

	const scrollHandler = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", scrollClassHandler);
		return () => window.removeEventListener("scroll", scrollClassHandler);
	}, []);

	return (
		<div className={scroller} onClick={scrollHandler}>
			<svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
				<path
					fillRule="evenodd"
					d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
					clipRule="evenodd"
				/>
			</svg>
		</div>
	);
};

export default ScrollTop;
