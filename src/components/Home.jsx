import Header from "./header";
import FoodOption from "./foodoption";
import Grocery from "./groceryoptions";
import Dineout from "./dineout";
import HomeFooter from "./Footer";

export default function Home(){

    return(
        <>
        <Header></Header>
         <FoodOption></FoodOption>
         <Grocery></Grocery>   
          <Dineout></Dineout>
          <HomeFooter></HomeFooter>
        </>
    )
}