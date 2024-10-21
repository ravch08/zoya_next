"use client";

import { useCallback, useEffect, useState } from "react";

const ScrollTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = useCallback(() => setIsVisible(window.scrollY > 350), []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);

	const scrollTopStyles = `scrollTop ${isVisible ? "scale-100" : "scale-0"}`;

	return (
		<div className={scrollTopStyles} onClick={scrollToTop}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="h-5 w-5">
				<path
					fillRule="evenodd"
					d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z"
					clipRule="evenodd"
				/>
			</svg>
		</div>
	);
};

export default ScrollTop;
