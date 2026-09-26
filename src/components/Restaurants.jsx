import RestCard from "./RestCards";
import { FilterRestaurants } from "./rest/filterrest";

export default function Restaurant(){

    return(
        <div className="max-w-[80%] mx-auto">
            <div className="mt-30 ml-5">
                <div className="text-xl font-sans font-bold">What's on your mind?</div>
            </div>
              <div className="flex  flex-wrap container mx-auto mt-10 gap-8">
                {/* <div>hi</div> */}
                 {
                   FilterRestaurants.map((items)=><RestCard key={items?.info?.id} item={items}></RestCard>)
                 }
              </div>
        </div>
    )
}


// https://api.allorigins.win/raw?url=
// https://corsproxy.io/?