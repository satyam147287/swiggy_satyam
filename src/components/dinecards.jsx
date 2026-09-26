export default function Dinecards({data}){
     
    return (
        <div className=" h-[370] flex-none shadow-sm mb-10 rounded-2xl">
             <a className="" target="_blank" href={data?.cta?.link}>  
                    <div className="mb-20">
                            <div className="relative">
                                            <img className="h-[200] w-full object-cover rounded-t-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+data?.info?.mediaFiles[0]?.url}></img>
                                        <div className="absolute inset-0 rounded-t-2xl bg-linear-to-t from-black via-black/2 to-transparent"></div>
                                        <p className="absolute bottom-4 text-white max-w-[92%] line-clamp-1 font-bold font-sans text-xl left-2">{data?.info?.name}</p>
                                    <div className="flex absolute bottom-4 right-2">
                                            <p className=" text-white flex items-center gap-1 font-semibold font-sans text-lg ">
                                              <svg
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-4 h-4"
                                                >
                                                    <circle cx="12" cy="12" r="11" fill="#16A34A" />


                                                    <path
                                                    d="M12 4.5L13.76 9.16L18.75 9.16L14.72 12.07L16.25 17L12 14.2L7.75 17L9.28 12.07L5.25 9.16H10.24L12 4.5Z"
                                                    fill="white"
                                                    />
                                                </svg>
                                            {data?.info?.rating ?.value}</p>
                                    </div>
                                    
                                </div>
                                    <div className="max-w-[95%] items-center">
                                        <div className="flex mt-2 justify-between text-sm font-sans text-gray-500 font-semibold">
                                              <p className="">{(data?.info?.cuisines).join(" • ")}</p>
                                              <p className="">{data?.info?.costForTwo}</p>
                                        </div>
                                        <div className="flex mt-1 justify-between text-sm font-sans text-gray-500 font-semibold">
                                              <p className="">{data?.info?.locationInfo?.formattedAddress}</p>
                                             <p className="">{data?.info?.locationInfo?.distanceString}</p>

                                        </div>
                                    </div>
                     </div>
             </a>
        </div>
    )

}