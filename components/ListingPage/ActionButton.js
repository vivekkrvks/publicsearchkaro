function ActionButtonCom({mobileNo,latitude,longitude,whatsAppNo}) {
  return(
    <>
    <div className="flex justify-between  py-2" >

    <div className="text-xs items-center text-gray-600" >
            
    <div className="flex items-center space-y-2  
    border-2 p-2 rounded-full shadow-sm" type="button" 
    onClick={() => window.open(`tel:${mobileNo}`, '_self')}>
    <img
            src="https://www.svgrepo.com/show/313260/call.svg"
            layout="fill" 
            className="block rounded h-6"
            alt="Exotic Fruits"
          />
          
            </div>
            <p className="items-center space-y-1  p-2">Call</p>
            </div>
    
    <div className="text-xs text-gray-600 items-center">
    <div className="flex items-center space-y-2  
    border-2 p-2 rounded-full shadow-sm" type="button" 
    onClick={() => window.open("https://maps.google.com/?q="+latitude+","+longitude)}>
    <img
            src="https://www.svgrepo.com/show/223645/placeholder-map-pointer.svg"
            layout="fill" 
            className="block rounded h-6"
            alt="Exotic Fruits"
          />
            </div>
            <p className="items-center space-y-1  p-2">Map</p>

            </div>
    
    <div className="text-xs text-gray-600">
    <div className="flex items-center space-y-2  
    border-2 p-2 rounded-full shadow-sm" type="button" 
    onClick={() => window.open(`https://wa.me/${whatsAppNo}`)}>
    <img
            src="https://www.svgrepo.com/show/303150/whatsapp-symbol-logo.svg"
            layout="fill" 
            className="block rounded h-6"
            alt="Exotic Fruits"
          />
            </div>
            <p className="items-center space-y-1  p-2">Text</p>
            </div>
    
    {/* <div className="text-xs text-gray-600">
    <div className="flex items-center space-y-2  border-2 p-2 rounded-full shadow-sm" >
    <img
            src="https://www.svgrepo.com/show/49524/book.svg"
            layout="fill" 
            className="block rounded h-6 "
            alt="Exotic Fruits"
          />
            </div>
            <p className="items-center space-y-1  p-2">Catalogue</p>
            </div> */}
    
    
    </div>
    {/* <button type="button" className="inline-block w-full px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
Book Appointment
  </button> */}
    </>
  )
}

export default ActionButtonCom