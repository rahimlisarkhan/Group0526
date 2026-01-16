import { ReadMoreBtn } from "@/components/ReadMore";
import { getBlogs } from "@/services/blog.api";
import Link from "next/link";

export default async function Blog(a) {

    console.log("a", a);



    const blogs = await getBlogs();

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                This is the Blog Page.
            </h1>

            {/* <div className="mt-8 flex flex-col flex-wrap items-center space-y-4">
                {blogs?.map((blog: any) => (
                    <Link key={blog.id} href={`/blog/${blog.id}`}>
                        <div className="mt-6 p-4 border border-gray-300 rounded-lg w-1/2 bg-white dark:bg-zinc-800 cursor-pointer hover:shadow-lg transition-shadow">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100">{blog.title}</h2>
                            <p className="mt-2 text-gray-700 dark:text-zinc-400">{blog.body}</p>
                        </div>
                    </Link>
                ))}
            </div> */}

            <div className="mt-8 flex flex-col flex-wrap items-center space-y-4">
                {blogs?.map((blog: any) => (
                    <div key={blog.id} className="mt-6 p-4 border border-gray-300 rounded-lg w-1/2 bg-white dark:bg-zinc-800 cursor-pointer hover:shadow-lg transition-shadow">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-100">{blog.title}</h2>
                        <p className="mt-2 text-gray-700 dark:text-zinc-400">{blog.body}</p>
                        <ReadMoreBtn to={`/blog/${blog.id}`}>Read More</ReadMoreBtn>
                    </div>
                ))}
            </div>
        </div>
    );
}
