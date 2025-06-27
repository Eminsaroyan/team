import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import Maser from "./Maser";

export default function GlxavorList() {
  const [glxavor, setGlxavor] = useState([]);

  useEffect(() => {
    async function fetchGlxavor() {
      try {
        const docRef = doc(db, "glxavor", "data");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setGlxavor(data.items || []);
        } else {
          setGlxavor([]);
        }
      } catch (err) {
        // Վերցնում ենք սխալը, բայց չենք ցույց տալիս
        setGlxavor([]);
      }
    }

    fetchGlxavor();
  }, []);

  return (
    <div className="grid grid-cols-2 justify-items-center gap-4 mt-[30px] m-[90px] lg:grid-cols-2">
      {glxavor.map(({ id, name, image }) => (
        <Maser key={id} id={id} name={name} image={image} />
      ))}
    </div>
  );
}
