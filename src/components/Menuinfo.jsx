import { useSelector } from "react-redux";
import {AddItem,IncrementItems,DecrementItem} from "../Store/Slice1"
import { useDispatch } from "react-redux"

export default function MenuInfo({info}){   //info==itemCards

    const DispatcherPro = useDispatch();

const cartItem = useSelector(state =>
    state.Slice_1.item.find(item => item.id === info.card.info.id)
);

const counter = cartItem ? cartItem.quantity : 0;

function HandleAddItem(){
    DispatcherPro(AddItem(info.card.info));
}

function HandleIncrement(){
    DispatcherPro(IncrementItems(info.card.info));
}

function HandleDecrement(){
    DispatcherPro(DecrementItem(info.card.info));
}

     
    return(
       <>
        <div className="flex justify-between my-5">
            <div className="w-[70%]">
                <div className="text-lg font-semibold">
                    {info?.card?.info?.name}
                </div>
                <div>₹{info.card.info.finalPrice?info.card.info.finalPrice/100:info.card.info.price/100}</div>
                
                <div className="text-lg font-sans mt-4" style={{
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                }}>{info?.card?.info?.description}</div>
            </div>
            
            <div className="w-[20%]">
                <div className="relative">
                    <img className="h-36 w-full rounded-2xl shadow-2xl object-cover"  src={"https://media-assets.swiggy.com/swiggy/image/upload/"+info?.card?.info?.imageId}></img>
                     <div>
                          {
                            (counter==0)?<button className="relative bottom-7 shadow-2xl rounded-lg transform transition duration-200 hover:scale-105 left-8 bg-white p-3 px-8 font-bold text-lg font-sans text-green-600" onClick={()=>HandleAddItem()}>ADD</button>
                                        :<div className="flex rot relative gap-3 bottom-7 max-w-24 shadow-2xl rounded-lg left-8 bg-white items-center font-bold text-lg p-3 font-sans text-green-600">
                                             <button className="ml-2 text-2xl" onClick={()=>HandleDecrement()}>-</button>
                                             <div>{counter}</div>
                                             <button className="text-2xl" onClick={()=>HandleIncrement()}>+</button>
                                         </div>
                          }
                     </div>
                     <div className="font-sans absolute bottom-2 left-10 text-sm text-gray-500">Customisable</div>
                </div>
            </div>
           
        </div>
         <hr className="border-gray-300"></hr>
       </>
    )
}