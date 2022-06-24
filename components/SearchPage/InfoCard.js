import Image from "next/image";
import {HeartIcon} from "@heroicons/react/outline"
import {PhoneOutgoingIcon, StarIcon} from "@heroicons/react/solid"
import { useRouter } from 'next/router'

function InfoCard({businessName,businessLink,contactPersonName,yearEstablished,
    state,district,contactNo1,img  
}) {
    const router = useRouter();

  return (
    <div
    onClick={() => router.push(`/oneBusiness/${businessLink}`)}

    className="flex py-4 px-2 pr-4 border-b cursor-pointer 
    hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
    <div className="relative h-52 w-40 md:w-80   flex-shrink-0" >
        <Image 
        className="rounded-2xl"
        src={img} layout="fill" objectFit="cover"/>
    </div>
    <div className=" flex flex-col w-full ">
         <p
         className="text-m font-semibold mt-2 mb-2 mx-2">
         {businessName}</p>
         <p
             className=" text-sm mb-2 mx-2">
             By - {contactPersonName}
        </p>
         <p
             className=" text-sm mb-2 mx-2">
             State: {state}, District: {district}
        </p>
         <p
             className=" text-sm mb-2 mx-2">
             Stablished on - {yearEstablished}
        </p>
    <div className="align-baseline mt-auto mx-2 my-2 "> 
    <button type="button" 
     onClick={() => window.open(`tel:${contactNo1}`, '_self')}
    class="inline-block w-full 
    
    px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition
     duration-150 ease-in-out ">
         Call
         </button>
    </div>
    </div>
    </div>
  )
}

export default InfoCard