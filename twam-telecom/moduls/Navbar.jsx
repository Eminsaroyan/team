import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export default function Navigation() {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    const fetchTabs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Tabs"));
        const tabsData = querySnapshot.docs.map((doc) => doc.data());
        setTabs(tabsData);
      } catch (error) {
        console.error("❌ Չհաջողվեց բեռնել Tabs Firestore-ից:", error);
      }
    };

    fetchTabs();
  }, []);

  return (
    <ul className="flex justify-center gap-6 mb-[30px]">
      {tabs.map(({ to, label, icon }) => (
        <li key={to} className="table-cell">
          <NavLink
            to={to}
            className={({ isActive }) =>
              `flex flex-col no-underline items-center px-[4rem] py-[2rem] transition ${
                isActive
                  ? "text-[#01415f] font-[600] border-b-2 border-[#01415f]"
                  : "text-[#616161]"
              }`
            }
          >
            <img
              src={icon}
              alt={label}
              className="w-[45px] h-[45px] mb-[10px]"
            />
            <span className="text-[16px]">{label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

