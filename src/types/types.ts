import mongoose from "mongoose";

export type SectionHeadingProps = {
	date?: string;
	heading: string;
};

export type BlogProps = {
	title: string;
	description: string;
	imgSrc: string;
	slug?: string;
	category: string;
	userId?: mongoose.Schema.Types.ObjectId;
	createdAt?: Date;
	updatedAt?: Date;
};

export type UserProps = {
	username: string;
	email: string;
	img?: string;
	password: string;
	isAdmin: Boolean;
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

export type ParamsProps = {
	params: {
		slug: string;
	};
};
