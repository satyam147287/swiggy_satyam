import { useParams } from "react-router";
import { useState } from "react";
import MenuInfo from "./Menuinfo";
import { MenuData } from "./menu/menudata";

export default function FoodSearch() {
  const { id } = useParams();

  const Rest = MenuData.find((data) => data.id == id);

  const [search, setSearch] = useState("");

  const filteredItems = Rest?.itemCards?.filter((item) =>item?.card?.info?.name?.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="w-[55%] mx-auto mt-30">
      <input
        type="text"
        placeholder="Search for dishes"
        className="h-10 w-full rounded-2xl pl-80 bg-gray-200"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

     {
        (search.length>1)
        ? <div className="mt-12">
        {filteredItems?.map((info) => (
          <MenuInfo
            key={info?.card?.info?.id}
            info={info}
          ></MenuInfo>
        ))}
      </div>
      :<></>
     }
    </div>
  );
}