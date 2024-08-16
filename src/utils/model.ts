import { BlogProps, UserProps } from "@/types/types";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			min: 3,
			max: 20,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			max: 50,
		},
		password: {
			type: String,
		},
		img: {
			type: String,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const blogSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		imgSrc: {
			type: String,
			required: true,
		},
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		slug: {
			type: String,
			required: true,
			unique: true,
		},
	},
	{ timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model<UserProps>("User", userSchema);
export const Blog = mongoose.models?.Blog || mongoose.model<BlogProps>("Blog", blogSchema);
