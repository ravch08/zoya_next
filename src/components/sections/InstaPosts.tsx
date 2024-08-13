"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { instaPosts } from "../lib/data";

const InstaPosts = () => {
	return (
		<section aria-labelledby="Instagram Posts" className="relative p-4">
			<Swiper
				loop={true}
				speed={1500}
				spaceBetween={10}
				grabCursor={true}
				navigation={false}
				centeredSlides={false}
				breakpoints={{
					768: {
						slidesPerView: 1,
					},
					1024: {
						slidesPerView: 3,
					},
					1400: {
						slidesPerView: 8,
					},
				}}
			>
				{instaPosts?.map((post) => (
					<SwiperSlide key={post.id}>
						<Image
							width={300}
							height={400}
							alt="instagram"
							src={post.imgSrc}
							className="insta-img"
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<Link
				href="#!"
				className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-sm bg-white px-8 py-3 text-xs text-primary-600 shadow-md hover:bg-slate-200"
			>
				FOLLOW US ON INSTAGRAM
			</Link>
		</section>
	);
};

export default InstaPosts;
