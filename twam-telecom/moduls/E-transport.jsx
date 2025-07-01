import Breadcrumb from "./Breadcrumb";
import Equipmentlink from "./Equipmentlink";
import EshopNav from "./Eshop-nav";
import Etransportfiltr from "./Etransport-filter";
import Fut from "./Fut";
import Headerone from "./Hederone";

export default function Etransport() {
    return (
        <>
            <Headerone />
            <EshopNav />
            <img src="https://www.telecomarmenia.am/images/product_category/1/16237540224216.jpeg" alt="" className="w-[100%]" />
            <Equipmentlink />
            <Breadcrumb />  
            <Etransportfiltr />
            <Fut />
        </>
    )
}