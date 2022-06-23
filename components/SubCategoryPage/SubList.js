import  {ChevronRightIcon } from '@heroicons/react/outline'
import Image from "next/image";

function SubListCom({logoLink,title}) {
 return(
    <div className="p-3 grid grid-cols-2  gap-1 rounded-b-lg border-b
     border-gray-400 break-words text-gray-900
     cursor-pointer mt-1
    hover:bg-gray-100 hover:shadow-lg hover:scale-101 transition 
    trasform duration-150 ease-out 
     ">
   <div className="relative flex  
     cursor-pointer my-auto " >
    <div className="relative h-7 w-7 ">
    <Image
        src={logoLink || "https://res.cloudinary.com/oasismanor/image/upload/v1656011132/defaults/vaprfamegbbm9puqmzz9.jpg"} layout="fill"
        className="rounded-lg "
        />
    </div>
      <h3 className="text-gray-600 ml-2">
       {title}
      </h3>
    </div>
   <div className="flex items-center justify-end text-grey-500 space-x-4 ">
   <ChevronRightIcon className="h-5 object-center"/>

   </div>

      </div>
 )
}

export default SubListCom