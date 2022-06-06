import Footer from "../../components/HomePage/Footer"
import HeaderTwoCom from "../../components/SubCategoryPage/HeaderTwo"
import { useRouter } from 'next/router'
import SubListCom from "../../components/SubCategoryPage/SubList";
import { MapIcon, PhoneIcon } from "@heroicons/react/solid";
function Search({cardData}) {

  return (
    <div className="bg-gray-50">
    <HeaderTwoCom />
<main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">




<section>
{/* //////////////////////////////////// */}
<div className="grid grid-cols-1 divide-y">
{cardData?.map((item, index) => (
    <SubListCom logoLink={item.logo } 
    title={item.title }/>
))}



{/* Services */}

{/* Description */}



</div>
</section>
</main>

    <Footer />
</div>
  )
}

export default Search

export async function getServerSideProps() {
 const cardData = eData

    return{
        props: {
            cardData
    }}
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