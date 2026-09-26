import FoodHeader from "./FoodHeader"
import { Outlet } from "react-router"

export default function RestContainer(){

    return(
        <>
        <FoodHeader></FoodHeader>
        <Outlet></Outlet>
        </>
    )
}