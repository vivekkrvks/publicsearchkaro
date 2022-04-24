import { useState } from "react";
import Image from "next/image";
import  {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon} from '@heroicons/react/solid'
import { useRouter } from 'next/router'
function Header({placeholder}) {
const [searchData, setSearchData] = useState("");

    const router = useRouter();
    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                searchData
            }
        })
    }

    return(
    <header
    className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md px-5 py-2 md:px-10"
            >
    {/* Left */} 
    <div onClick={() => router.push('/')} 
    className="relative flex items-center h-10
     cursor-pointer my-auto " >
    <Image 
    // src="https://links.papareact.com/qd3"
    src="https://res.cloudinary.com/qualifier/image/upload/v1650096997/Logo/searchkarologo_zhvqqn.png"
     layout="fill" 
     objectFit="contain"
     objectPosition="left"
     />
    </div>
       {/* middle */}
    <div className="flex items-center md:border-2 
    rounded-full py-2
    md:shadow-sm
    ">
    <input 
    type="text" 
    placeholder={placeholder || "Start your Search"}
    className=" flex-grow pl-5 bg-transparent outline-none text-sm text-grey-600
    placeholder-grey-400
    "
    value={searchData}
    onChange={(e) => setSearchData(e.target.value)}
    />
    <SearchIcon 
    onClick={search}
    className="hidden md:inline-flex
     h-8 bg-red-400
    text-white rounded-full
    p-2 cursor-pointer md:mx-2"/>
    </div>
    {/* right */}
    <div className="flex items-center justify-end text-grey-500 space-x-4">
        <p className="hidden md:inline cursor-pointer" >List Free</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full shadow-sm" >
            <MenuIcon className="h-6" />
            <UserCircleIcon className="h-6" />
        </div>
    </div>
</header>)
}

export default Header;