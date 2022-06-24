import Footer from "../../components/HomePage/Footer"
import HeaderTwoCom from "../../components/SubCategoryPage/HeaderTwo"
import { useRouter } from 'next/router'
import SubListCom from "../../components/SubCategoryPage/SubList";
import { MapIcon, PhoneIcon } from "@heroicons/react/solid";
function subWithCatLink({cardData,allSubWithCatLink,testData}) {
//  /subCategory/check
const router = useRouter();

  return (
    <div className="bg-gray-50">
    <HeaderTwoCom catName={allSubWithCatLink[0]?.category.categoryName || "No result"}/>
<main className="py-6 px-4 sm:p-6 md:py-10 md:px-28 md:bg-slate-50">




<section className=" md:bg-slate-50">
{/* //////////////////////////////////// */}
<div className="grid grid-cols-1 divide-y">

  
{
allSubWithCatLink?.map((item, index) => (
    <SubListCom key={index} logoLink={item.logo.url } 
    title={item.subCategoryName } subCatLink={item.link} />
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

export default subWithCatLink

export async function getServerSideProps({params}) {
 const cardData = eData


    const catLink = params.withCatLink
  const allSubWithCatLink2 = await fetch(`https://searchkarna.com/api/v1/forPublicWeb/catSubCat/getSubWithLogo/${catLink}`)
  .then().catch(err => console.log(err))
  const allSubWithCatLink = await allSubWithCatLink2.json()

  return {
    props: {
        allSubWithCatLink,
      cardData,

      
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