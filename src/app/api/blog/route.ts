import { NextResponse } from "next/server";

import { connectToDb } from "@/utils/db";
import { Blog } from "@/utils/model";

export const GET = async () => {
	try {
		connectToDb();
		const blogs = await Blog.find();
		return NextResponse.json(blogs);
	} catch (error) {
		console.log(error);
		throw new Error("Failed to Fetch blogs!");
	}
};
