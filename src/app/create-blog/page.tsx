import { addBlog } from "@/actions/action";
import { PageBanner } from "../../components/lib/helper";

const ServerActionTest = () => {
	return (
		<main>
			<PageBanner
				title="Create Blog"
				imgSrc="/assets/banner-02.jpg"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ab praesentium accusantium!"
			/>
			<div className="container mx-auto py-12">
				<form action={addBlog} className="flex flex-col gap-3">
					<input className="p-3 bg-slate-100" type="text" placeholder="title" name="title" />
					<textarea
						className="p-3 bg-slate-100"
						name="description"
						placeholder="description"
					></textarea>
					<input className="p-3 bg-slate-100" type="text" placeholder="slug" name="slug" />
					<input className="p-3 bg-slate-100" type="text" placeholder="category" name="category" />
					<input className="p-3 bg-slate-100" type="text" placeholder="userId" name="userId" />
					<input className="p-3 bg-slate-100" type="text" placeholder="Image" name="imgSrc" />
					<button type="submit" className="btn btn-dark">
						Add Blog
					</button>
				</form>
			</div>
		</main>
	);
};

export default ServerActionTest;
