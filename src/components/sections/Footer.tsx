import Image from "next/image";
import Link from "next/link";

import { ScrollTop, SocialIcons } from "../lib/helper";

const Footer = () => {
	return (
		<footer className="bg-footer py-8">
			<div className="flex-between container text-xs font-light text-white">
				<span>© 2023 ZOYA. All Rights Reserved.</span>
				<Link href="/">
					<Image src="/assets/logo-light.png" alt="Zoya" width={96} height={26} />
				</Link>
				<SocialIcons fillColor="white" />
				<ScrollTop />
			</div>
		</footer>
	);
};

export default Footer;
