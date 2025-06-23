import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Stars({ rating, color = "text-yellow-400", size = "text-[30px]" }) {
    const fullStars = Math.floor(rating);
    const decimal = rating - fullStars;
    const hasHalf = decimal >= 0.25 && decimal < 0.75;
    const fullExtra = decimal >= 0.75 ? 1 : 0;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0) - fullExtra;

    return (
        <div className={`flex ${color} ${size}`}>
            {[...Array(fullStars)].map((_, i) => (
                <FaStar key={`full-${i}`} />
            ))}
            {hasHalf && <FaStarHalfAlt />}
            {[...Array(fullExtra)].map((_, i) => (
                <FaStar key={`extra-${i}`} />
            ))}
            {[...Array(emptyStars)].map((_, i) => (
                <FaRegStar key={`empty-${i}`} />
            ))}
        </div>
    );
}

export default function TeamTV() {
    const appStoreRating = 3.5;
    const googlePlayRating = 3.6;

    return (
        <div className="max-w-[1330px] mb-[50px] mx-auto">
            <h1 className="mb-[100px]">TeamTV</h1>

            <div className="flex">
                <img
                    src="https://www.telecomarmenia.am/images/team_apps/1/17249416402556.png"
                    alt="TeamTV"
                    className="h-[290px] rounded-[15px] mr-[20px]"
                />

                <div className="flex flex-col">
                    <div className="flex mb-[15px] text-[#FFFF00]">
                        <a
                            href="https://apps.apple.com/app/teamtv"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://www.telecomarmenia.am/img/redesign/app_store.png"
                                alt="App Store"
                                className="mb-[15px] mr-[30px]"
                            />
                        </a>
                        <Stars rating={appStoreRating} />
                        <span className="text-[20px] text-[#000000] text-center ml-[12px]">{appStoreRating}</span>
                    </div>

                    <div className="flex text-[#FFFF00]">
                        <a
                            href="https://play.google.com/store/apps/details?id=am.telecom.teamtv"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://www.telecomarmenia.am/img/redesign/google_play.png"
                                alt="Google Play"
                                className="mb-[15px] mr-[30px] hover:opacity-90 transition"
                            />
                        </a>
                        <Stars rating={googlePlayRating} />
                        <span className="text-[25px] text-[#000000] ml-3">{googlePlayRating}</span>
                    </div>

                </div>
            </div>
        </div>
    );
}
