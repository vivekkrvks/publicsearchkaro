import Head from "next/head";
import Banner from "../components/HomePage/Banner";
import Footer from "../components/HomePage/Footer";
import Header from "../components/HomePage/Header";
import LargeCard from "../components/HomePage/LargeCard";
import MediumCard from "../components/HomePage/MediumCard";
import SmallCard from "../components/HomePage/SmallCard";
import LogoDesCom from "../components/ListingPage/LogoDes";
export default function Home({exploreData,cardsData,catData}) {
  return (
    <div className=""> 
      <Head>
        <title>Search Karo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header/>
      {/* Banner */}
      <Banner />
      {/* <h1>Let do it</h1> */}
      {/* main */}
      <main className="max-w-7xl mx-auto  px-8 sm:px-16">
      <section className="pt-6">
        <h2 className="text-4xl font-bold pb-5 ">
          Explore World
        </h2>
        {/* pull some data */}
        <div className="grid grid-cols-1 
        sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        
        ">
        {catData?.map((item, index) => ( 
          <SmallCard key={item.link} img={item.logo.url} distance={item.subCategoryLenght} location={item.categoryName}/>
        ))}   
        </div>
         </section>
         <section>
          <h2 className="text-4xl font-semibold py-8 ">
            More Popular
          </h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide
          p-3 ml-3
          ">
          {cardsData?.map((item, index) => (
            <MediumCard key = {index} img={item.img} title={item.title}/>
          ))}
          </div>       
         </section>
         <LargeCard 
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="The Best of Best Outdoors"
          buttonText="Get Inspired"
          /> 
      </main>
      <Footer/>
    </div>
  )}

  export async function getStaticProps() {
    const exploreData = eData
    const cardsData = cData
    const catData1 = await fetch(`http://localhost:2040/api/v1/addition/category/allCatForPublic`)
    .then().catch(err => console.log(err))
    const catData = await catData1.json()
    return {
      props: {
        catData,
        exploreData,
        cardsData
      }
    }
  }
  const eData = [
    {"img":"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/finddoctors.svg","location":"Doctors","distance":"45-minute drive"},
    {"img":"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/weddingrequisites.svg","location":"Wedding Requisites","distance":"4.5-hour drive"},
    {"img":"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/travelbookings.svg","location":"Travel","distance":"4.5-hour drive"},
    {"img":"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/renthire.svg","location":"Rent & Hire","distance":"4-hour drive"},
    {"img":"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/civilcontractors.svg","location":"Contractors","distance":"45-minute drive"},
    {"img":"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/realestate.svg","location":"Real Estate","distance":"4.5-hour drive"},
    {"img":"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/homeservices.svg","location":"Home Services","distance":"6-hour drive"},
    {"img":"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/jobconsultants.svg","location":"Jobs","distance":"2-hour drive"}]

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