import Image from "next/image";

function PhotosCardCom({img}) {
  return (
    <div className="cursor-pointer hover:scale-105 transform
    transition duration-300 ease-out
    ">
        <div className="relative h-20 w-20">
            <Image
            src={img} layout="fill"
            className="rounded-lg"
            /> 
        </div>

    </div>
  )
}

export default PhotosCardCom