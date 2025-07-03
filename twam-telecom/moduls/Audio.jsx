import Accessorieslink from "./Accessorieslink";
import Audiofil from "./Audiofiltr";
import Breadcrumb from "./Breadcrumb";
import EshopNav from "./Eshop-nav";
import Fut from "./Fut";
import Headerone from "./Hederone";

export default function Audio(){
    return (
        <div>
            <Headerone />
            <EshopNav />
            <img src="https://www.telecomarmenia.am/images/product_category/1/1583994419298.jpeg" alt="" className="w-[100%]" />
            <Accessorieslink />
            <Breadcrumb />
            <Audiofil />
            <Fut />
        </div>
    )
}