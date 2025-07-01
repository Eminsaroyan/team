import Breadcrumb from "./Breadcrumb";
import Equipmentlink from "./Equipmentlink";
import EshopNav from "./Eshop-nav";
import Fut from "./Fut";
import GamePadfiltr from "./GamePadjsx";
import Headerone from "./Hederone";

export default function Gamepads(){
    return (
        <div>
            <Headerone />
            <EshopNav />
            <img src="https://www.telecomarmenia.am/images/product_category/1/15682702554105.jpeg" alt="" className="w-[100%]" />
            <Equipmentlink />
            <Breadcrumb />
            <GamePadfiltr />
            <Fut />
        </div>
    )
}