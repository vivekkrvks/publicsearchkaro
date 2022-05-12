import Footer from "../components/HomePage/Footer"
import Header from "../components/HomePage/Header"
import { useRouter } from 'next/router'
import CrausalCom from "../components/ListingPage/Crausal";
import {HeartIcon} from "@heroicons/react/outline"
import RatingCom from "../components/ListingPage/Rating";

function Search({searchResults}) {
    const router = useRouter();
    const { searchData } = router.query;
  return (
    <div>
        <Header placeholder={`Result for ${searchData}`}/>
<main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
<CrausalCom/>
<div className="space-y-2 text-xs text-gray-600">
  <div className="flex mt-2 mb-2 space-x-2">
  <h1 className="font-bold leading-tight text-2xl  text-black">Skin Radiance Clinic </h1>
  <HeartIcon className="h-7  cursor-pointer"/>
  </div>
            <p>How Search Karo Works </p>
            <p>
              <RatingCom star={4} num={4.4}  />
            </p>
            <p>Careers</p>
            <p>Press</p>
            <p>Investor Relations</p>
        </div>
<div className="flex justify-between  py-2" >

<div className="text-xs items-center text-gray-600">
<div className="flex items-center space-y-2  border-2 p-2 rounded-full shadow-sm" >
<img
        src="https://www.svgrepo.com/show/313260/call.svg"
        layout="fill" 
        className="block rounded h-6"
        alt="Exotic Fruits"
      />
      
        </div>
        <p className="items-center space-y-1  p-2">Call</p>
        </div>

<div className="text-xs text-gray-600">
<div className="flex items-center space-y-2  border-2 p-2 rounded-full shadow-sm" >
<img
        src="https://www.svgrepo.com/show/223645/placeholder-map-pointer.svg"
        layout="fill" 
        className="block rounded h-6"
        alt="Exotic Fruits"
      />
        </div>
        <p className="items-center space-y-1  p-2">Map</p>
        </div>

<div className="text-xs text-gray-600">
<div className="flex items-center space-y-2  border-2 p-2 rounded-full shadow-sm" >
<img
        src="https://www.svgrepo.com/show/303150/whatsapp-symbol-logo.svg"
        layout="fill" 
        className="block rounded h-6"
        alt="Exotic Fruits"
      />
        </div>
        <p className="items-center space-y-1  p-2">Map</p>
        </div>

<div className="text-xs text-gray-600">
<div className="flex items-center space-y-2  border-2 p-2 rounded-full shadow-sm" >
<img
        src="https://www.svgrepo.com/show/49524/book.svg"
        layout="fill" 
        className="block rounded h-6"
        alt="Exotic Fruits"
      />
        </div>
        <p className="items-center space-y-1  p-2">Map</p>
        </div>


</div>


</main>

        <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz')
    .then(res => res.json());

    return{
        props: {
            searchResults
    }}
}