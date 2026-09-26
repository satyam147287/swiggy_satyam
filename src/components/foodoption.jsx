import { Fooditems } from "./utils/foodcards"
import FCard from "./fcard"

export default function FoodOption(){

    return(
       <>
        <div className="mx-auto max-w-[80%]"> 
            <div className="bg-white max-w-[80%] font-sans container mt-16 mb-8  text-4xl font-bold">
                  Order our best food options
            </div >
                       
            <div className="overflow-x-auto grid grid-rows-2 grid-flow-col auto-cols-[160px] gap-4 ">
                 {
                     Fooditems.map((elements)=><FCard key={elements.id} foodelement={elements}></FCard>)
                } 
            </div>
        </div> 
       </>
    )
}