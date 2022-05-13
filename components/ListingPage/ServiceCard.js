import Image from "next/image";

function ServiceCardCom({img,location,distance}) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer
    hover:bg-gray-100 hover:shadow-lg hover:scale-110 transition 
    trasform duration-150 ease-out
    ">
        <div className="relative h-4 w-4">
        <Image
        src={"https://images.vectorhq.com/images/previews/a03/tick-clip-art-100622.png"} layout="fill"
        className=""
        />
        </div>
        <div>
            <h2>{"Skin Check"}</h2>
            
        </div>
    </div>
  )
}

export default ServiceCardCom