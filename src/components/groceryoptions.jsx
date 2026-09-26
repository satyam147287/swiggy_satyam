import { grocery } from "./utils/grocerycards";
import Gcard from "./gcards";

export default function Grocery(){

    return(
        <div className="my-36 mx-auto max-w-[80%]">
              <div className="bg-white max-w-[80%] font-sans container mt-16 mb-8  text-4xl font-bold">
                     Shop groceries on Instamart  
              </div>
                     
              <div className="overflow-x-scroll grid grid-rows-1 grid-flow-col auto-cols-[160px] gap-8">
                    {
                        grocery.map((elements)=><Gcard key={elements.id} groceryelements={elements}></Gcard>)
                    }
                </div>            
        </div>
    )
}