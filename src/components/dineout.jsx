import Dinecards from "./dinecards";
import { dineoutRestaurants } from "./utils/dineutil";

export default function Dineout(){

    return (
        <div className="max-w-[80%] mx-auto">
             <div className="mb-10 text-2xl font-sans font-bold text-gray-750">
                    Discover best restaurants on Dineout
             </div>

             <div className="grid grid-rows-1 grid-flow-col auto-cols-[326px] gap-4 overflow-x-scroll">{
                dineoutRestaurants.map((elements)=><Dinecards key={elements?.info?.id} data={elements}></Dinecards>)
                }
             </div>
        </div>
    )
}