import { Link, useLocation } from "react-router-dom";

const breadcrumbMap = {
  "/mermasin": "Ընկերության մասին > Մեր մասին",
  "/museum": "Ընկերության մասին > Կապի թանգարան",
  "/norutyunner": "Ընկերության մասին > Նորություններ",
  "/ashxatanq": "Ընկերության մասին > Աշխատանք Տելեկոմ Արմենիայում",
  "/hashvetvutyunner": "Ընկերության մասին > Արդյունքներ և հաշվետվություններ",
  "/ethics": "Ընկերության մասին > Գործարար Էթիկա և Կոմպլայենս",
  "/zargacum": "Ընկերության մասին > Կայուն զարգացում",
  "/bazhneter": "Ընկերության մասին > Բաժնետերերին",
  "/eshoppaymaner": "Տեղեկատվություն > E-shop պայմաններ",
  "/arakum": "Տեղեկատվություն > Առաքման պայմաններ",
  "/vacharqi-kentronner": "Տեղեկատվություն > Վաճառքի և սպասարկման կենտրոններ",
  "/tackuyt": "Տեղեկատվություն > Ծածկույթ",
  "/bjjnayin-tsakuyt": "Տեղեկատվություն > Բջջային ցանցի ծածկույթ",
  "/aparik": "Տեղեկատվություն > Ապառիկ վաճառքի պայմաններ",
  "/internet-tsakuyt": "Տեղեկատվություն > Team ինտերնետի հասանելիության ծածկույթ",
  "/gaxtniutyun": "Տեղեկատվություն > Գաղտնիության քաղաքականություն",
  "/marzeri-koder": "Տեղեկատվություն > ՀՀ մարզերի կոդեր",
  "/ogtagorci-pastatuxte": "Տեղեկատվություն > Օգտակար փաստաթղթեր",
  "/gorcnqer-matakararner": "Գնումներ",
  "/vacharner": "Վաճառքներ",
  "/gordznker": "Գործընկերներ",
  "/paymaner": " Տեղեկատվություն > Ընդհանուր դրույթներ և պայմաններ",
  "/anvtangutyun": " Տեղեկատվություն > Անվտանգություն",
  "/offers": "Ակցիաներ",
  "/numbers": "Համարներ",
  "/smartphones": "Սմարթֆոններ",
  "/equipment":"Սարքավորումներ",
};

export default function Breadcrumb() {
  const location = useLocation();
  const pathname = location.pathname;

  const items = [];

  if (pathname !== "/") {
    items.push(
      <Link key="/" to="/" className="text-[#000000]  hover:no-underline">
        Գլխավոր
      </Link>
    );
  }

  if (breadcrumbMap[pathname]) {
    items.push(
      <span key={pathname} className="text-black ml-1">
        {" > "}
        {breadcrumbMap[pathname]}
      </span>
    );
  }

  return <div className="text-[14px] max-w-[1230px] m-auto mt-[20px] mb-6">{items}</div>;
}
