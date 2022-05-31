import Footer from "../components/HomePage/Footer"
import Header from "../components/HomePage/Header"
import { useRouter } from 'next/router'
import CrausalCom from "../components/ListingPage/Crausal";
import {HeartIcon,MapIcon,PhoneIcon,ClockIcon} from "@heroicons/react/outline"
import RatingCom from "../components/ListingPage/Rating";
import ActionButtonCom from "../components/ListingPage/ActionButton";
import PhotosCardCom from "../components/ListingPage/allPhotoList";
import LogoDesCom from "../components/ListingPage/LogoDes";
import ServiceCardCom from "../components/ListingPage/ServiceCard";

function Listing({cardsData,vendorData}) {
    const router = useRouter();
    const { idNo } = router.query;
    console.log(idNo)
  return (
    <div className="bg-gray-50">
        <Header placeholder={`Result for ${vendorData.businessName}`}/>
<main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
<CrausalCom />
<div className="space-y-2 text-xs text-gray-600">
  <div className="flex mt-2 mb-2 space-x-2">
  <h1 className="font-bold leading-tight text-2xl  text-black">{vendorData.businessName}</h1>
  <HeartIcon className="h-7  cursor-pointer"/>
  </div>
            <p>By - {vendorData.contactPersonName} </p>
            <p>
              {/* <RatingCom star={4} num={4.4}  /> */}
            </p>
            <p>Stablished on - {vendorData.yearEstablished}</p>
            <p>{idNo}</p>
            {/* <p>Investor Relations</p> */}
        </div>
<ActionButtonCom/>

  <section>
          <h2 className="text-1xl font-semibold py-3 ">
            More Photos
          </h2>
          <div className="flex space-x-4 overflow-scroll scrollbar-hide
          p-1 ml-0
          ">
          {cardsData?.map((item, index) => (
            <PhotosCardCom key = {index} img={item.img} title={item.title}/>
          ))}
          </div>  
          <div className="py-3">
          <button type="button" className="inline-block w-25 px-2 py-2 gap-y-2 border-2 border-blue-600 text-blue-600 font-small text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
Upload Photo
  </button>   
  </div>  
         </section>
<section>
{/* //////////////////////////////////// */}
<div className="grid grid-cols-1 divide-y">

<LogoDesCom logo={ <MapIcon className="h-5 object-center"/>} 
text={"Rajendra Nagar Patna 800016, Rajendra Nagar Golambar Vaishali Golambar, Purnia HO, Purnia - 854301 (Behind Apsa Medical Shop)"}
/>
<LogoDesCom logo={ <PhoneIcon className="h-5 object-center"/>} 
text={"09846173904"}
/>
<LogoDesCom logo={ <ClockIcon className="h-5 object-center"/>} 
text={"Opens at 11.00 AM EveryDay"}
/>
{/* Services */}
<div className="p-3  gap-4 rounded-b-lg border-b border-gray-200 break-words text-gray-900">
<h2 className="text-1xl font-semibold  ">
            Services
          </h2>
          <div className="grid grid-cols-2 
        sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 " >
            <ServiceCardCom />
            <ServiceCardCom />
            <ServiceCardCom />
            <ServiceCardCom />
            <ServiceCardCom />
            <ServiceCardCom />
          </div>
</div>
{/* Description */}
<div className="p-3  gap-4 rounded-b-lg border-b border-gray-200 break-words text-gray-900">
<h2 className="text-2xl font-semibold  ">
About Skin Radiance Clinic
          </h2>
         
      { 
      <div className="py-4 " >

<div>
<div className="dtltrndhdng font13"><strong>Awards</strong></div>
<div className="dtltrndsubs font13">Dermacon -2011</div>
<div className="dtltrndsubs font13">&nbsp;</div>
</div>
<div>
<div className="dtltrndhdng font13"><strong>Booking Policy</strong></div>
<div className="dtltrndsubs font13">No Restriction</div>
<div className="dtltrndsubs font13">&nbsp;</div>
</div>
<div>
<div className="dtltrndhdng font13"><strong>Cancellation Policy</strong></div>
<div className="dtltrndsubs font13">No Restriction</div>
<div className="dtltrndsubs font13">&nbsp;</div>
</div>
<div>
<div className="dtltrndhdng font13"><strong>Consultation fee</strong></div>
<div className="dtltrndsubs font13">₹ 500</div>
<div className="dtltrndsubs font13">&nbsp;</div>
</div>
<div>
<div className="dtltrndhdng font13"><strong>Fellowship</strong></div>
<div className="dtltrndsubs font13">FAADS SINGAPORE. , FDI AMERICA DERMTECH, DERMACON INDIA , US , USA .</div>
<div className="dtltrndsubs font13">&nbsp;</div>
</div>
<div>
<div className="dtltrndhdng font13"><strong>Main Qualification</strong></div>
<div className="dtltrndsubs font13">MBBS , MD ( SKIN , HAIR &amp; VD ) DVL</div>
<div className="dtltrndsubs font13">&nbsp;</div>
</div>
<div>
<div className="dtltrndhdng font13"><strong>Membership</strong></div>
<div className="dtltrndsubs font13">Faads President.. India East .</div>
<div className="dtltrndsubs font13">&nbsp;</div>
</div>
<div>
<div className="dtltrndhdng font13"><strong>Qualification</strong></div>
<div className="dtltrndsubs font13">MBBS , MD ( SKIN , HAIR &amp; VD ) DVL-DR D Y PATIL MUMBAI. -2011</div>
<div className="dtltrndsubs font13">&nbsp;</div>
</div>
<div>
<div className="dtltrndhdng font13"><strong>Registration No</strong></div>
<div className="dtltrndsubs font13">MCI INDIA 2011</div>
<div className="dtltrndsubs font13">&nbsp;</div>
</div>
<div>
<div className="dtltrndhdng font13"><strong>Specialization</strong></div>
<div className="dtltrndsubs font13">Dermatologists</div>
<div className="dtltrndsubs font13">&nbsp;</div>
</div>
<div>
<div className="dtltrndhdng font13"><strong>Years of Experience</strong></div>
<div className="dtltrndsubs font13">12</div>
</div>
{/*  */}
<div className="detailbizinfosample py-3">
<h1><strong>Skin Radiance Clinic in Rajendra Nagar Golambar Vaishali Golambar, Purnia</strong></h1>
<p>Skin Radiance Clinic listed under Beauty Clinics in Rajendra Nagar Golambar Vaishali Golambar, Purnia. Check Visiting Time, Fees, Address, Contact Number, Ratings &amp; Reviews, Photos, Maps etc, on Justdial.</p>
<h1>&nbsp;</h1>
<h2><strong>Location and overview</strong></h2>
<p>Skin Radiance Clinic in Rajendra Nagar Golambar Vaishali Golambar, Purnia is one of the most renowned Beauty Clinics in the area. The practitioner holds qualification in the capacity of MBBS , MD ( SKIN , HAIR &amp; VD ) DVL DR D Y PATIL MUMBAI. 2011. The specialist has also won awards such as Dermacon 2011 for the expertise in the field. Countless locals in Rajendra Nagar Golambar Vaishali Golambar have placed immense trust in the practitioner over the years. Skin Radiance Clinic is situated at Rajendra Nagar Patna 800016,Behind Apsa Medical Shop,Rajendra Nagar Golambar Vaishali Golambar,Purnia HO-854301 near Behind Apsa Medical Shop, which is easily accessible through various modes of transport.</p>
<h1>&nbsp;</h1>

<h2><strong>More information</strong></h2>
<p>Skin Radiance Clinic in Purnia has a supportive and friendly staff, and the latest medical know-how to help patients. The specialist has also won awards such as Dermacon 2011 for the expertise in the field. The clinic abides by all the necessary safety protocols, including Covid-19 precautionary measures. The doctor and team offer world-class care and guidance, always putting their patients first. Services like Brow Lift, Skin Biopsy, Skin Checks etc. are also offered here, so all your treatment needs are taken care of in one place.</p>
<p>If you&rsquo;re planning to visit Skin Radiance Clinic in the near future, it&rsquo;s advisable to book an appointment in advance to avoid waiting time. The hours of operation are 11:00 - 19:00.</p>
<p>The clinic accepts payments through multiple modes of payment like Cash, Debit Card, Credit Card, UPI, BHIM, Paytm, Visa Card, Master Card, G Pay, PhonePe, RTGS, IMPS, NEFT, making it easy and convenient for patients.</p>
<p>Please scroll to the top for the address and contact details of Skin Radiance Clinic</p>
</div>
{/*  */}
</div>}
          
</div>


    </div>
</section>
</main>

        <Footer />
    </div>
  )
}

export default Listing

export async function getStaticProps() {
  const cardsData = cData

  const vendorData = await fetch('http://3.110.212.184/api/v1/addition/vendor/get/62965dc3cb0933524d93d08b')
  .then(res => res.json());
  return {
    props: {
      cardsData,
      vendorData
      
    }
  }
}

  const cData = [
    {"img":"https://akam.cdn.jdmagicbox.com/images/icons/android/newhome/2/acrepairservice.jpg?v=1","title":"Ac Repair"},
    {"img":"https://akam.cdn.jdmagicbox.com/images/icons/android/newhome/2/pestcontrol.jpg?v=1","title":"Pest Control"},
    {"img":"https://links.papareact.com/s03","title":"Home Construction"},
    {"img":"https://links.papareact.com/8ix","title":"Pet Care"},
    {"img":"https://akam.cdn.jdmagicbox.com/images/icons/android/newhome/2/acrepairservice.jpg?v=1","title":"Ac Repair"},
    {"img":"https://akam.cdn.jdmagicbox.com/images/icons/android/newhome/2/pestcontrol.jpg?v=1","title":"Pest Control"},
    {"img":"https://links.papareact.com/s03","title":"Home Construction"},
    {"img":"https://links.papareact.com/8ix","title":"Pet Care"}
  ]

