import { unstable_noStore as noStore } from "next/cache";

import { connectToDb } from "./db";
import { Blog, User } from "./model";

export const getBlogs = async () => {
	try {
		connectToDb();
		const blogs = await Blog.find();
		return blogs;
	} catch (error) {
		console.log(error);
		throw new Error("Failed to fetch blogs!");
	}
};

export const getBlog = async (slug: string) => {
	try {
		connectToDb();
		const blog = await Blog.findOne({ slug });
		return blog;
	} catch (error) {
		console.log(error);
		throw new Error("Failed to fetch Blog!");
	}
};

export const getUsers = async () => {
	try {
		connectToDb();
		const users = await User.find();
		return users;
	} catch (error) {
		console.log(error);
		throw new Error("Failed to fetch users!");
	}
};

export const getUser = async (id: string) => {
	noStore();

	try {
		connectToDb();
		const user = await User.findById(id);
		return user;
	} catch (error) {
		console.log(error);
		throw new Error("Failed to fetch user!");
	}
};
