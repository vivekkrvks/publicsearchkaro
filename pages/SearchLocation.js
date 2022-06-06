import  {ChevronDownIcon, ChevronLeftIcon, LocationMarkerIcon, SearchIcon, ShareIcon } from '@heroicons/react/Outline'
import PopUpCom from '../components/Common/PopUp';

function SearchPageCom() {
    return(
        <>
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
    <div className="flex items-center justify-center  py-2 ">
        <p className="font-medium leading-tight text-xl">Araria </p>
         </div>
    {/* right */}
    <div className="flex items-center justify-end text-grey-500 space-x-4 ">
    <ShareIcon className="h-6" />
    </div>
</header>
<section>

       {/* Search*/}
       <div className="flex items-center 
    rounded-xl py-2 border-2 shadow-sm
    mx-2 my-4
    ">
    <input 
    type="text" 
    placeholder="Search Your Location ..."
    className=" flex-grow pl-5 bg-transparent outline-none text-sm text-grey-600
    placeholder-grey-400
    "
    // value={searchData}
    // onChange={(e) => setSearchData(e.target.value)}
    
    />
    <SearchIcon 
    // onClick={search}
    className="hidden md:inline-flex
     h-8 bg-red-400
    text-white rounded-full
    p-2 cursor-pointer md:mx-2"/>
    </div>

</section>
</>
)
}

export default SearchPageCom;