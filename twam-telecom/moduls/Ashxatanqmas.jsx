import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import Ashxatanqtext from "./Ashxatanqtext";

export default function Ashxatanqmas() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const querySnapshot = await getDocs(collection(db, "Asxatanq"));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setJobs(data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    }

    fetchJobs();
  }, []);

  return (
    <div className="max-w-[1230px] m-auto mt-[30px] mb-[30px] px-[20px]">
      <h1 className="font-[800] font-team text-[28px] mb-[20px]">Աշխատանք Տելեկոմ Արմենիայում</h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-[20px]">
        {jobs.map((item) => (
          <Ashxatanqtext
            key={item.id}
            mouth={item.mouth}
            vernagir={item.vernagir}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}