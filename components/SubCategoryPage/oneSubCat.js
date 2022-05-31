import { ChevronDoubleRightIcon } from "@heroicons/react/Outline";

function OneSubCatCom({logo,text}) {
return(
    <div class="p-3  flex gap-4 
    rounded-b-lg border-b border-gray-200 
    break-words text-gray-900 
    cursor-pointer
    hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition 
    trasform duration-150 ease-out
    ">
    <div className="grid content-center">
        {logo}
    </div>
    <div className="items-start col-span-11 px-2 " >
      <p className="text-gray-600">
        {text}
      </p>
    </div>
    <div className=" ml-auto ">
    <ChevronDoubleRightIcon className="h-5 object-"/>
    </div> 
    </div>
)
}

export default OneSubCatCom