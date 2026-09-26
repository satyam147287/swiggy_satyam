import MenuInfo from "./Menuinfo"
import { useState } from "react"

export default function Menu({item,foodtype}){

      const [arrow,setarrow] = useState('true')

      if(!arrow){
        return(
           <div>
                 <div className="flex justify-between mt-8 max-w-[55%] mx-auto items-center">
                    <div className="text-3xl mb-14 font-bold text-black font-sans">
                        {item.title}
                    </div>
                    <button className="text-4xl mr-20 mb-14"  onClick={()=>setarrow(!arrow)}>{arrow?"-":"+"}</button>
                </div>
                 <div className="h-5 max-w-[55%] mx-auto bg-gray-400"></div> 
           </div>
        )
      }

      if(foodtype==='veg'){
        return(
               <div className="max-w-[55%]  mt-8 mx-auto">
               <div className="flex justify-between  align-center">
                    <div className="text-3xl mb-14 font-bold text-black font-sans">
                        {item.title}
                    </div>
                    <button className="text-4xl mr-20" onClick={()=>setarrow(!arrow)}>{arrow?"-":"+"}</button>
               </div>
              <div>
                {
                    item?.itemCards?.filter((food)=>'isVeg' in food?.card?.info).map((info)=><MenuInfo key={info?.card?.info?.id} info={info}></MenuInfo>)
                }
              </div>
               <div className="h-5 mb-10 bg-gray-400"></div> 
        </div>
        )
      }

      if(foodtype==='nonveg'){
        return(
          
             <div className="max-w-[55%]  mt-8 mx-auto">
               <div className="flex justify-between  align-center">
                    <div className="text-3xl mb-14 font-bold text-black font-sans">
                        {item.title}
                    </div>
                    <button className="text-4xl mr-20" onClick={()=>setarrow(!arrow)}>{arrow?"-":"+"}</button>
               </div>
              <div>
                {
                    item?.itemCards?.filter((food)=>!('isVeg' in food?.card?.info)).map((info)=><MenuInfo key={info?.card?.info?.id} info={info}></MenuInfo>)
                }
              </div>
               <div className="h-5 mb-10 bg-gray-400"></div> 
        </div>

        )
      }
        
    return(
        <div className="max-w-[55%]  mt-8 mx-auto">
               <div className="flex justify-between  item-center">
                    <div className="text-3xl mb-14 font-bold text-black font-sans">
                        {item.title}
                    </div>
                    <button className="text-4xl mb-14 mr-20" onClick={()=>setarrow(!arrow)}>{arrow?"-":"+"}</button>
               </div>
              <div>
                {
                    item?.itemCards?.map((info)=><MenuInfo key={info?.card?.info?.id} info={info}></MenuInfo>)
                }
              </div>
               <div className="h-5 mb-10 bg-gray-400"></div> 
        </div>
    )
}


