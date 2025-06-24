import { Link, useLocation } from "react-router-dom";

const breadcrumbMap = {
  "/mermasin": "Մեր մասին",
  "/museum": "Կապի թանգարան",
  "/norutyunner": "Նորություններ",
  "/ashxatanq": "Աշխատանք Տելեկոմ Արմենիայում",
  "/hashvetvutyunner": "Արդյունքներ և հաշվետվություններ",
  "/ethics": "Գործարար Էթիկա և Կոմպլայենս",
  "/zargacum": "Կայուն զարգացում",
  "/bazhneter": "Բաժնետերերին",
  "/eshoppaymaner": "E-shop պայմաններ",
  "/arakum": "Առաքման պայմաններ",
  "/vacharqi-kentronner": "Վաճառքի և սպասարկման կենտրոններ",
  "/tackuyt": "Ծածկույթ",
  "/bjjnayin-tsakuyt": "ջջային ցանցի ծածկույթ",
  "/aparik": "Ապառիկ վաճառքի պայմաններ",
};

export default function Breadcrumb() {
  const location = useLocation();
  const pathname = location.pathname;

  const items = [];

  if (pathname !== "/") {
    items.push(
      <Link key="/" to="/" className="text-[#000000] hover:no-underline">
        Գլխավոր էջ
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
