import Footer from "../components/HomePage/Footer"
import Header from "../components/HomePage/Header"
import { useRouter } from 'next/router'
import CrausalCom from "../components/ListingPage/Crausal";
import {HeartIcon} from "@heroicons/react/outline"
import RatingCom from "../components/ListingPage/Rating";
import ActionButtonCom from "../components/ListingPage/ActionButton";

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
<ActionButtonCom/>
<button type="button" class="inline-block w-full px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
Book Appointment
  </button>


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