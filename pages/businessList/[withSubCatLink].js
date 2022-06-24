import Footer from "../../components/HomePage/Footer"
import Header from "../../components/HomePage/Header"
import { useRouter } from 'next/router'
import InfoCard from "../../components/SearchPage/InfoCard";
import PaginationCom from "../../components/BusinessListPage/Pagination";
function BusinessList({searchResults,allBusinessList}) {
    const router = useRouter();
    const { searchData } = router.query;
  return (
    <div>
        <Header placeholder={`Result for ${searchData}`}/>
        <main className="flex">
            <section className="flex-grow pt-4 px-6">
                <p className="text-xs">
                    300+ results for 
                    <b> {searchData}</b>
                </p>
                <h1 className="text-3xl font-semibold mt-2 mb-6">
                    Search Results
                </h1>
                <div className="hidden lg:inline-flex mb-5 space-x-3
                text-gray-800 whitespace-nowrap
                ">
                   {/* <p className="mybutton
                    "> Cancellation Flexibility
                    </p>
                     <p className="mybutton"> Type of place </p>
                    <p className="mybutton"> Price </p>
                    <p className="mybutton"> Rooms and Beds </p>
                    <p className="mybutton"> More filters </p> */}
                </div>
                <div className="flex flex-col">
                {allBusinessList?.map(({businessName,link,contactPersonName,yearEstablished,
                    state,district,contactNo1,img
            }, index) => (
 
                   <InfoCard 
                   businessName={businessName}
                   businessLink={link}
                        contactPersonName={contactPersonName}
                        yearEstablished={yearEstablished}
                        state={state}
                        district={district}
                        contactNo1={contactNo1}
                        img={img}

                   />
                ))}
                </div>
                <PaginationCom />
            </section>
        </main>
        <Footer />
    </div>
  )
}

export default BusinessList

export async function getServerSideProps({params}) {
    const searchResults = eData
   
   
       const subCatLink = params.withSubCatLink
     const allBusinessList2 = await fetch(`https://searchkarna.com/api/v1/forPublicWeb/getPubBusiness/getwithSubLink/${subCatLink}`)
     .then().catch(err => console.log(err))
     const allBusinessList = await allBusinessList2.json()
   
     return {
       props: {
           allBusinessList,
           searchResults,
   
         
       }
     }
   }
   
   
   const eData = [
       {"logo":"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/finddoctors.svg","title":"Vivek1"},
       {"logo":"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/weddingrequisites.svg","title":"Vivek12"},
       {"logo":"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/travelbookings.svg","title":"Vivek13"},
       {"logo":"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/renthire.svg","title":"Vivek14"},
       {"logo":"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/civilcontractors.svg","title":"Vivek15"},
       {"logo":"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/realestate.svg","title":"Vivek16"},
       {"logo":"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/homeservices.svg","title":"Vivek17"},
       {"logo":"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/jobconsultants.svg","title":"Vivek18"}]