import Footer from "../../components/HomePage/Footer"
import Header from "../../components/HomePage/Header"
import { useRouter } from 'next/router'
import CrausalCom from "../../components/ListingPage/Crausal";
import {HeartIcon,MapIcon,PhoneIcon,ClockIcon} from "@heroicons/react/outline"
import RatingCom from "../../components/ListingPage/Rating";
import ActionButtonCom from "../../components/ListingPage/ActionButton";
import PhotosCardCom from "../../components/ListingPage/allPhotoList";
import LogoDesCom from "../../components/ListingPage/LogoDes";
import ServiceCardCom from "../../components/ListingPage/ServiceCard";
import FaqCom from "../../components/ListingPage/Faq";

function Listing({cardsData,businessData}) {
    const router = useRouter();
    const { idNo } = router.query;
    const returnMeContactNumber = () => {
      let cNo = businessData.contactNo1
      if(businessData.contactNo2){
        cNo += `, ${businessData.contactNo2}`
      } else 
      if(businessData.contactNo3){
        cNo += `, ${businessData.contactNo3}`
      } else 
      if(businessData.contactNo4){
        cNo += `, ${businessData.contactNo4}`
      }
      return cNo
    }
  return (
    <div className="bg-gray-50">
        <Header placeholder={`${businessData.businessName}`}/>
<main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
<CrausalCom img={businessData.allImage} />
<div className="space-y-2 text-xs text-gray-600">
  <div className="flex mt-2 mb-2 space-x-2">
  <h1 className="font-bold leading-tight text-2xl  text-black">{businessData.businessName}</h1>
  {/* <HeartIcon className="h-7  cursor-pointer"/> */}
  </div>
            <p>By - {businessData.contactPersonName} </p>
            <p>
              {/* <RatingCom star={4} num={4.4}  /> */}
            </p>
            <p>Stablished on - {businessData.yearEstablished}</p>
            {/* <p>{idNo}</p> */}
            {/* <p>Investor Relations</p> */}
        </div>
<ActionButtonCom
mobileNo={businessData.contactNo1}
whatsAppNo={businessData.whatsAppNo}
latitude = {businessData.latitude}
longitude = {businessData.longitude}
/>

  <section>
          <h2 className="text-1xl font-semibold py-3 ">
            More Photos
          </h2>
          <div className="flex space-x-4 overflow-scroll scrollbar-hide
          p-1 ml-0
          ">
          {businessData.allImage?.map((item, index) => (
            <PhotosCardCom key = {index} img={item.imgUrl} />
          ))}
          </div>  
          <div className="py-3">
          {/* <button type="button" className="inline-block w-25 px-2 py-2 gap-y-2 border-2 border-blue-600 text-blue-600 font-small text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
Upload Photo
  </button>    */}
  </div>  
         </section>
<section>
{/* //////////////////////////////////// */}
<div className="grid grid-cols-1 divide-y">

<LogoDesCom logo={ <MapIcon className="h-5 object-center"/>} 
text={"State: " + businessData.state + ", District: " + businessData.district}/>
<LogoDesCom logo={ <PhoneIcon className="h-5 object-center"/>} 
text={returnMeContactNumber()}
/>
{/* <LogoDesCom logo={ <ClockIcon className="h-5 object-center"/>} 
text={"Opens at 11.00 AM EveryDay"}
/> */}
{/* Services */}
<div className="p-3  gap-4 rounded-b-lg border-b border-gray-200 break-words text-gray-900">
<h2 className="text-1xl font-semibold  ">
            Services
          </h2>
          <div className="grid grid-cols-2 
        sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 " >
          {businessData.myServices.map((item,index) => (
            <ServiceCardCom title={item.serviceName} />
          ))}
           
          </div>
</div>
{/* Description */}
<div className="p-2 px-2 gap-4 rounded-b-lg border-b border-gray-200 break-words text-gray-900 " >
<h1 className="text-1xl font-semibold py-1 px-2 ">
Frequently Asked Question
          </h1>
<FaqCom />
</div>


    </div>
</section>
</main>

        <Footer />
    </div>
  )
}

export default Listing

export async function getServerSideProps({params}) {
    const businessLink = params.businessLink
  const businessData2 = await fetch(`https://searchkarna.com/api/v1/forPublicWeb/getPubBusiness/getOne/${businessLink}`)
  .then().catch(err => console.log(err))
  const businessData = await businessData2.json()
  return {
    props: {
      businessData
      
    }
  }
}




