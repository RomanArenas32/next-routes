"use client"

import Title from "@/app/components/Title"
import { POST } from "../page"
import { useRouter } from "next/navigation";

const Slug = ({params}: any) => {
  
  const post = POST.find(post => post.slug === params.slug);

  const router = useRouter();

  const handleClickBack = ()=>{
    router.back();
  }
  
  return (
    <div>
        <Title titulo={post.title}/>
        <p className="text-center">{post.content}</p>
        <main className="container mx-auto">
        <h1 className="text-3xl font-bold mb-5">{post.title}</h1>
        <p className="text-gray-700 mb-5">{post.content}</p>
        <button
          onClick={handleClickBack}
          className="bg-indigo-800 text-white px-4 py-2 rounded hover:bg-indigo-950 transition-all duration-300"
        >
          Regresar
        </button>
      </main>
    </div>
  )
}

export default Slug