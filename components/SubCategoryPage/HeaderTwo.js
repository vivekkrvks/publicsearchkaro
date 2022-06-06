import  {ChevronLeftIcon, ShareIcon } from '@heroicons/react/Outline'
import PopUpCom from '../Common/PopUp';

function HeaderTwoCom() {
    return(
    <header
    className="sticky top-0 z-30 grid grid-cols-3 bg-white shadow-md px-5 py-2 md:px-10 "
            >
    {/* Left */} 
    <div onClick={() => onclick=history.back()} 
    className="relative flex items-center h-5
     cursor-pointer my-auto " >
    <ChevronLeftIcon className="h-6" />
    </div>
    {/* middle */}
    <div className="flex items-center justify-center  py-2
    
    ">
        <h4 className="font-medium leading-tight text-3xl">Tailwind </h4>
         </div>
    {/* right */}
    <div className="flex items-center justify-end text-grey-500 space-x-4 ">
    <ShareIcon className="h-6" />
    </div>
</header>)
}

export default HeaderTwoCom;