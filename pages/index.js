import Head from "next/head";
import Banner from "../components/HomePage/Banner";
import Footer from "../components/HomePage/Footer";
import Header from "../components/HomePage/Header";
import LargeCard from "../components/HomePage/LargeCard";
import MediumCard from "../components/HomePage/MediumCard";
import SmallCard from "../components/HomePage/SmallCard";

export default function Home({exploreData,cardsData}) {
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
        {exploreData?.map((item, index) => ( 
          <SmallCard key ={item.img} img={item.img} distance ={item.distance} location = {item.location}/>
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
    const exploreData = await fetch('https://links.papareact.com/pyp')
    .then(res => res.json());
    const cardsData = await fetch('https://links.papareact.com/zp1')
    .then(res => res.json());
    return {
      props: {
        exploreData,
        cardsData
      }
    }
  }