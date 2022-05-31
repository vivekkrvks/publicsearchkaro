import Footer from "../components/HomePage/Footer"
import Header from "../components/HomePage/Header"
import { useRouter } from 'next/router'
import InfoCard from "../components/SearchPage/InfoCard";
import OneSubCatCom from "../components/SubCategoryPage/oneSubCat";
import { MapIcon } from "@heroicons/react/solid";
function Search({searchResults}) {
    const router = useRouter();
    const { searchData } = router.query;
  return (
    <div>
        <Header placeholder={`Result for ${searchData}`}/>
        <main className="flex">
            <section className="flex-grow pt-4 px-6">
            <div class="grid grid-cols-1 divide-y">
            <OneSubCatCom logo={ <MapIcon className="h-5 object-center"/>} 
            text={"Rajendra Nagar "}  /> 
            <OneSubCatCom logo={ <MapIcon className="h-5 object-center"/>} 
            text={"Hello there "}  /> 
            <OneSubCatCom logo={ <MapIcon className="h-5 object-center"/>} 
            text={"Cat cooking "}  /> 
            <OneSubCatCom logo={ <MapIcon className="h-5 object-center"/>} 
            text={"max right "}  /> 
            </div>
         
            </section>
        </main>
        {/* <Footer /> */}
    </div>
  )
}

export default Search

