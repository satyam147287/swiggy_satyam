import { Link } from "react-router";

export default function RestCard({item}){
    
    return(
       <Link to={"/city/Patna/"+item?.info?.id}>
            <div className="w-sm border-white border-2 transform transition duration-200 hover:scale-95">
               <img className="h-54 w-sm rounded-4xl object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+item?.info?.cloudinaryImageId}></img>
               <div className="max-w-[90%] mx-auto">
                  <div className="text-lg font-semibold">{item?.info?.name}</div>
                  <div className="flex gap-3 text-sm font-semibold items-center ">
                        <div className="flex items-center">
                           <svg
                           className="w-4 h-4"
                           viewBox="0 0 20 20"
                           fill="#16a34a">
                        <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.51L10 14.14l-4.94 2.58.94-5.5-4-3.9 5.53-.81L10 1.5z" />
                        </svg>

                        <div>{item?.info?.avgRating}</div>
                        </div>
                        <div>{item?.info?.sla?.slaString}</div>
                  </div>
                  <div className="whitespace-nowrap text-sm font-sans text-gray-500 overflow-hidden text-ellipsis">{item?.info?.cuisines.join(" ")}</div>
                  <div className="text-sm font-serif text-gray-500">{item?.info?.areaName}</div>
               </div>
            </div>
       </Link>
    )

}