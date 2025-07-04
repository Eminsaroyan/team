import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation  } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Havelvacimasin({ collectionName, documentId }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, collectionName, documentId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    }

    fetchData();
  }, [collectionName, documentId]);

  if (!data) return null;

  const { images = [], description, features = [] } = data;

  return (
    <div className="max-w-[1250px] pl-[200px] pr-[200px] mx-auto mb-[50px] flex flex-col gap-[20px]">
      <div className="flex gap-[30px]">
        <p className="text-[25px] font-team">iOS</p>
        <p className="text-[25px] font-team">Android</p>
      </div>

      {images.length === 5 ? (
        <Swiper
          modules={[Navigation ]}
          spaceBetween={20}
          slidesPerView={4}
            slidesPerGroup={1}
          navigation={true}
          loop={true}
          className="w-full w-[500px] mx-auto"
        >
          {images.map((url, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={url}
                alt={`slide-${idx}`}
                className="w-full h-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex flex-wrap gap-[25px]">
          {images.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`image-${idx}`}
              className="w-[20%] min-w-[200px] rounded-[10px]"
            />
          ))}
        </div>
      )}

      <p className="max-w-[750px] text-[16px] text-[#666e75] leading-[1.6]">
        {description}
      </p>

      <ul className="list-disc pl-[20px] text-[16px] text-[#666e75] leading-[2]">
        {features.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
