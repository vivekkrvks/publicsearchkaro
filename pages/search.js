import Footer from "../components/HomePage/Footer"
import Header from "../components/HomePage/Header"
import { useRouter } from 'next/router'
import InfoCard from "../components/SearchPage/InfoCard";
function Search({searchResults}) {
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
                    <p className="mybutton
                    "> Cancellation Flexibility
                    </p>
                    <p className="mybutton"> Type of place </p>
                    <p className="mybutton"> Price </p>
                    <p className="mybutton"> Rooms and Beds </p>
                    <p className="mybutton"> More filters </p>
                </div>
                <div className="flex flex-col">
                {searchResults?.map(({img,location,title,
                description,star,price,total    
            }, index) => (
                   <InfoCard 
                        img={img}
                        location={location}
                        title={title}
                        description={description}
                        star={star}
                        price={price}
                        total={total}
                        key={index}

                   />
                ))}
                </div>
            </section>
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