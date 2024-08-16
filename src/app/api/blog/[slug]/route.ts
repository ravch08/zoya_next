import { NextResponse } from "next/server";

import { connectToDb } from "@/utils/db";
import { Blog } from "@/utils/model";

export const GET = async (_, { params }) => {
	const { slug } = params;

	try {
		connectToDb();
		const blog = await Blog.findOne({ slug });
		return NextResponse.json(blog);
	} catch (error) {
		console.log(error);
		throw new Error("Failed to Fetch blog!");
	}
};

export const DELETE = async (_, { params }) => {
	const { slug } = params;

	try {
		connectToDb();
		await Blog.deleteOne({ slug });
		return NextResponse.json("Blog deleted!");
	} catch (error) {
		console.log(error);
		throw new Error("Failed to delete blog!");
	}
};
