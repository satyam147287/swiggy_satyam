import React , {useState} from "react";
import ReactDom from "react-dom/client"
import Restaurant from "./components/Restaurants";
import { BrowserRouter, Routes , Route } from "react-router";
import Home from "./components/Home";
import RestMenu from "./components/RestMenu";
import FoodSearch from "./components/foodsearch";
import RestContainer from "./components/REstcontainer";
import { Store } from "./Store/Stores";
import { Provider } from "react-redux";


function App(){

return(
    <Provider store={Store}>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route element={<RestContainer></RestContainer>}>
                  <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
                  <Route path="/city/patna/:id" element={<RestMenu></RestMenu>}></Route>
                  <Route path="/city/patna/:id/search" element={<FoodSearch></FoodSearch>}></Route>
            </Route>

        </Routes>
    </BrowserRouter>
    </Provider>
)

}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>);