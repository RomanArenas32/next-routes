import Title from "@/app/components/Title"
import Link from "next/link";

export const POST = [
  {
    id: 1,
    title: "Post 1",
    slug: "post-1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 2,
    title: "Post 2",
    slug: "post-2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 3,
    title: "Post 3",
    slug: "post-3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

const Blog = () => {
  return (
    <>
        <Title titulo="Blog"/>
        <main className="container mx-auto">
          <div className="grid gap-5">
            {
              POST.map(el => (
                <div key={el.id} className="shadow rounded-md p-5">
                  <p className="text-2xl font-bold">{el.title}</p>
                  <Link href={`/blog/${el.slug}`}>Mas informacion</Link>
                </div>
              ))
            }
          </div>
        </main>
    </>
  )
}

export default Blog