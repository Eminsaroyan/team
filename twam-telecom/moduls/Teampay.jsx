import Fut from "./Fut";
import AppListByCollection from "./Gnahatakan";
import Havelvacimasin from "./Hvelvacimasin";
import Teamlink from "./Teamlink";

export default function () {
    return (
        <>
            <Teamlink />
            <AppListByCollection collectionName='Teampay' documentId="wiQVcMgOxX1OxYwssBoM" />
            <Havelvacimasin collectionName="Teampay" documentId="7fMgmiDHMFiym5fdinGg" />
            <Fut />
        </>
    )
}