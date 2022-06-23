import Image from "next/image";
import { useRouter } from 'next/router'

function 
SmallCard({img,location,distance,link}) {
  const router = useRouter();

  return (
    <div 
    onClick={() => router.push(`/subCategory/${link}`)}
    
    className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer
    hover:bg-gray-100 hover:shadow-lg hover:scale-110 transition 
    trasform duration-150 ease-out
    ">
        <div className="relative h-16 w-16">
        <Image
        src={img } layout="fill"
        className="rounded-lg"
        />
        </div>
        <div>
            <h2>{location}</h2>
            <h3 className="text-gray-500">{distance}</h3>
        </div>
    </div>
  )
}

export default SmallCard