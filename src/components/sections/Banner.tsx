"use client";

import Image from "next/image";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { bannerItems } from "../lib/data";

const Banner = () => {
	return (
		<section className="p-0" aria-labelledby="Banner Carousel">
			<Swiper
				loop={true}
				speed={1000}
				effect={"fade"}
				spaceBetween={30}
				grabCursor={true}
				slidesPerView={1}
				navigation={true}
				centeredSlides={true}
				modules={[Autoplay, Navigation, EffectFade]}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
					dynamicBullets: true,
				}}
			>
				{bannerItems?.map((bannerItem) => (
					<SwiperSlide key={bannerItem.id}>
						<div className="banner-item">
							<figure className="relative">
								<Image
									width={1000}
									height={1000}
									className="w-full"
									alt={bannerItem.heading}
									src={bannerItem.imgSrc}
								/>
							</figure>
							<div className="w-full absolute top-1/2 left-1/2 text-center text-white -translate-y-1/2 -translate-x-1/2 z-10">
								<p className="super-heading ">{bannerItem.superHeading}</p>
								<h1 className="text-6xl pt-6 pb-4">{bannerItem.heading}</h1>
								<p className="sub-heading">
									<span>{bannerItem.date}</span>
									<span>|</span>
									<span>{bannerItem.subHeading}</span>
								</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Banner;
