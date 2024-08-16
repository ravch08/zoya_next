"use server";

import { revalidatePath } from "next/cache";

import { connectToDb } from "@/utils/db";
import { Blog } from "@/utils/model";

export const addBlog = async (formData: FormData) => {
	const { title, description, category, imgSrc, slug, userId } = Object.fromEntries(formData);

	try {
		connectToDb();

		const newBlog = new Blog({ title, imgSrc, slug, category, description, userId });
		await newBlog.save();

		console.log("saved to DB");

		revalidatePath("/blog");
	} catch (error) {
		console.log(error);
		return { error: "Something went wrong!" };
	}
};

export const deleteBlog = async (formData: FormData) => {
	const { id } = Object.fromEntries(formData);

	try {
		connectToDb();
		await Blog.findByIdAndDelete(id);

		console.log("deleted from DB");

		revalidatePath("/blog");
	} catch (error) {
		console.log(error);
		return { error: "Something went wrong!" };
	}
};
