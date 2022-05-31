function LogoDesCom({logo,text}) {
 return(
    <div className="p-3 flex gap-4 rounded-b-lg border-b border-gray-200 break-words text-gray-900">
    <div className="grid content-center">
    {logo}
    </div>
    <div className="items-start col-span-11 px-2" >
      <p className="text-gray-600">
  {text}
      </p>
    </div> 
      </div>
 )
}

export default LogoDesCom