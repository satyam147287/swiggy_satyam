import { Search } from "lucide-react"
import { Link } from "react-router"

export default function Header(){

    return(
        
        <header className="bg-[#ff5200] font-sans">
            <div className="max-w-[80%] bg-[#ff5200] text-white items-center container mx-auto flex justify-between py-8">
                  <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>
                  <div className="flex gap-10 items-center font-bold">
                    <a href="https://www.swiggy.com/corporate/" target="_blank">Swiggy Corporate</a>
                    <a href="https://partner.swiggy.com/food/login" target="_blank">Partner with us</a>
                    <a className="border border-white px-2 py-4 rounded-2xl" href="" >Get the App</a>
                    <a className="bg-black  px-10 py-4 rounded-2xl h-16" href="">Sign In</a>
                  </div>
                  
            </div>
            <div className="pt-[64] pb-[32] relative">
                <img className="h-112 w-62 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                <img className="h-112 w-62 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                <div className="max-w-[50%] flex justify-center text-white text-center text-[48px] font-bold container mx-auto">
                    Order food. Discover best restaurants. Swiggy it!
                </div>
                <div className="flex justify-center items-center gap-10">
                    <input className="bg-white px-16 rounded-lg h-10 w-[23%] font-bold" placeholder="Enetr your delivery location"></input>
                    <input className="bg-white px-16 rounded-lg h-10 w-[30%] font-bold " placeholder="Search for restaurant, item or more"></input>
                </div>
            </div>
            <div className="max-w-[80%] container mx-auto flex">
                    <Link to="/restaurant">
                           <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
                    </Link>

                    <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                         <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
                    </a>
                    <a href="https://www.swiggy.com/dineout">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
                    </a>
            </div>
        </header>
    )
}