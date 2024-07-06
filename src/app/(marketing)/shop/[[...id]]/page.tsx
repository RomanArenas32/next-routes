import Title from "@/app/components/Title"

const Id = ({params} : any) => {
    console.log(params)
  return (
    <div>
        <Title titulo="Producto" />
        <p>{params.id}</p>
    </div>
  )
}

export default Id