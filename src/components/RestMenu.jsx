import { Link, useParams } from "react-router";
import { MenuData } from "./menu/menudata";
import Menu from "./Menu";
import { FilterRestaurants } from "./rest/filterrest";
import { useState , useEffect} from "react";
export default function RestMenu(){

     useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

      let {id}=useParams();
     const Buffer=MenuData.filter((Data)=>Data.id==id)

     const Buffer2=FilterRestaurants.find((Data)=>(Data?.info?.id)==id)

     console.log(Buffer2?.info?.name)
    
    const [isveg,setisveg]=useState(null);

    return(
        <div>
            <div className="max-w-[52%]  mt-30 mx-auto">
                     <div className="text-xl font-sans font-bold ml-5 mb-4">{Buffer2?.info?.name}</div>
                     <div className="flex gap-10 mb-2 ml-8 text-lg font-semibold font-sans">
                          <div className="text-black">Order Online</div>
                          <div className="text-gray-400">Dineout</div>
                     </div>
                     <div className="w-full">
                          <img className="h-84 w-full mx-auto object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+Buffer2?.info?.cloudinaryImageId}></img>
                     </div>
                     <div  className="flex gap-1 ml-6 mt-4 font-semibold font-sans text-m">
                          <div className="flex gap-1 ">
                               <div>{Buffer2?.info?.avgRatingString}</div>
                               <div>({Buffer2?.info?.totalRatingsString} ratings)</div>
                          </div>
                          <div> {Buffer2?.info?.costForTwo}</div>
                     </div>
            </div>
            <Link to={`/city/patna/${id}/search`}>
                 <div className="max-w-[55%]  mt-8 mx-auto">
                <p className="h-10 bg-gray-200 rounded-2xl border  font-semibold pt-1 pl-80 items-center">Search for dishes</p>
            </div>
            </Link>
            <div className="flex gap-4 max-w-[55%]  mt-8 mx-auto">
                <button className={`border-2  rounded-lg px-3 py-2 text-xl text-white font-bold ${isveg==='veg'?"bg-green-500":"bg-gray-400"}`} onClick={()=>setisveg(isveg==='veg'?null:'veg')} >VEG</button>
                <button className={`border-2 px-3 rounded-lg py-2 text-xl  text-white font-bold ${isveg==='nonveg'?"bg-red-500":"bg-gray-400"}`} onClick={()=>setisveg(isveg==="nonveg"?null:"nonveg")}>NON-VEG</button>
                 
            </div>
            <div>
              {
                Buffer.map((data)=><Menu key={data?.id} item={data} foodtype={isveg}></Menu>)
              }
              
            </div>
        </div>
    )
}