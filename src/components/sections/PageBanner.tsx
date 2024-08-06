import Image from "next/image";
import { PageBannerProps } from "../../types/types";

const PageBanner = ({ imgSrc, title, description }: PageBannerProps) => {
	return (
		<section aria-labelledby={title} className="relative p-0">
			<figure className="h-[400px] overflow-hidden brightness-75">
				<Image src={imgSrc} alt={title} width={1000} height={600} className="w-full" />
			</figure>
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
				<h1 className="mb-4 text-6xl">{title}</h1>
				<p className="font-light">{description}</p>
			</div>
		</section>
	);
};

export default PageBanner;
