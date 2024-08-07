export type SectionHeadingProps = {
	date: string;
	heading: string;
};

export type BlogpostProps = {
	id?: number;
	imgSrc: string;
	author: string;
	heading: string;
	latest?: boolean;
	category: string;
	popular?: boolean;
	description: string;
};

export type SocialIconsProps = {
	fillColor: string;
};

export type ButtonProps = {
	target: string;
	btnText: string;
};

export type PageBannerProps = {
	imgSrc: string;
	title: string;
	description: string;
};

export type AssistantProps = {
	id: number;
	assistantCat: string;
	name: string;
	imgSrc: string;
	info: string;
};
