
import { ReadMoreBtn } from "@/components/ReadMore";
import { getBlogId } from "@/services/blog.api";

export default async function BlogDetail(
    {
        params,
    }: {
        params: Promise<{ slug: string }>
    }
) {
    const { slug } = await params

    const blogData = await getBlogId(slug)

    return (
        <div className="p-8 m-2 border-teal-600 border-4 min-h-screen flex flex-col items-center justify-center">
            <ReadMoreBtn to={`/blog`}>Back</ReadMoreBtn>

            <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                {blogData?.title}
            </h1>
            <p className="mt-4 text-lg text-gray-700 dark:text-zinc-400">
                {blogData?.body}
            </p>
        </div>
    );
}


