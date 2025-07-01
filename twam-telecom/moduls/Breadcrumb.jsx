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
  "/paymaner": "Տեղեկատվություն > Ընդհանուր դրույթներ և պայմաններ",
  "/anvtangutyun": "Տեղեկատվություն > Անվտանգություն",
  "/offers": "Ակցիաներ",
  "/numbers": "Համարներ",
  "/smartphones": "Սմարթֆոններ",
  "/equipment": "Սարքավորումներ",
  "/e-transport": [
    { to: "/", label: "Գլխավոր" },
    { to: "/equipment", label: "Սարքավորումներ" },
    { label: "Էլ․ տրանսպորտ" },
  ],
};

export default function Breadcrumb() {
  const { pathname } = useLocation();
  const mapValue = breadcrumbMap[pathname];

  if (!mapValue) return null;

  return (
    <div className="text-[14px] max-w-[1230px] m-auto mt-[20px] mb-6">
      {Array.isArray(mapValue) ? (
        mapValue.map((crumb, idx) => (
          <span key={idx} className="text-black">
            {idx > 0 && " > "}
            {crumb.to ? (
              <Link to={crumb.to} className="text-[#000000] hover:underline">
                {crumb.label}
              </Link>
            ) : (
              <span>{crumb.label}</span>
            )}
          </span>
        ))
      ) : (
        <>
          <Link to="/" className="text-[#000000] hover:underline">
            Գլխավոր
          </Link>
          <span className="text-black">{" > "}{mapValue}</span>
        </>
      )}
    </div>
  );
}

