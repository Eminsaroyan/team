export default function Numbersmas() {
    return (
        <div className="mt-[20px] bg-white py-6">
            <div className="max-w-[1230px] mx-auto px-4">
                <div className="mb-4">
                    <div className="w-[400px]  mb-[20px] border">
                        <p className="text-gray-700  w-full pt-[10px] pb-[10px] font-medium mb-2 border">Որոնել</p>
                        <div className="flex flex-wrap w-[300px] rounded-[20px] mt-[30px] mb-[30px]  items-center gap-4">
                            <select
                                defaultValue=""
                                className="border border-[#E0E0E0]  rounded-l-[20px] px-[3px] py-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="" disabled>XX</option>
                                <option value="33">33</option>
                                <option value="43">43</option>
                                <option value="91">91</option>
                                <option value="96">96</option>
                                <option value="99">99</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Նվազագույնը 2 թիվ"
                                className="flex-1 border border-[#E0E0E0] w-[150px]  px-[3px] py-[20px] rounded-r-[20px]"
                            />
                        </div>
                        <button className="pl-[100px] ml-[60px] mb-[20px] pr-[100px] pt-[12px] pb-[12px] text-[#ffffff] text-[20px] bg-[#f04d4d] border-none rounded-[20px]">Որոնել</button>
                        <button className="pl-[55px] text-[15px] pr-[55px] ml-[60px] mb-[20px] bg-[#ffffff] pt-[12px] pb-[12px]  border border-[#f04d4d] text-[#f04d4d]  rounded-[20px]">Պատահական համար</button>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="w-[360px] mb-[20px] border  px-[20px] py-[20px] bg-white shadow-sm">
                        <p className="text-gray-700 w-full py-[10px] font-medium mb-[20px] border-b">Ցուցադրել միայն</p>
                        <div className="flex gap-4 mb-[20px]">
                            <div className="flex flex-col">
                                <label className="mb-[5px] text-sm font-medium text-gray-700">Սկսած</label>
                                <input
                                    type="number"
                                    placeholder="0 ֏"
                                    className="w-[120px] mr-[10px] px-[4px] py-[2px] border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-[5px] text-sm font-medium text-gray-700">Մինչև</label>
                                <input
                                    type="number"
                                    placeholder="350000 ֏"
                                    className="w-[120px] px-[4px] py-[2px] border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>


                        <div className="  mb-[30px]">
                            {[
                                "1,000 ֏ - 50,000 ֏",
                                "50,000 ֏ - 100,000 ֏",
                                "100,000 ֏ - 150,000 ֏",
                                "200,000 ֏ - 250,000 ֏",
                                "300,000 ֏ - 350,000 ֏",
                            ].map((range, idx) => (
                                <label key={idx} className="block cursor-pointer text-[18px] hover:text-blue-600">
                                    <input type="radio" name="price" className="mr-[8px]" />
                                    {range}
                                </label>
                            ))}
                        </div>

                        <p className="text-gray-700 py-[10px] font-medium mb-[20px] border-b">Տեսակը</p>
                        <div className="space-y-[2rem] mb-[30px]">
                            {["Բոլոր", "Դիմում", "Պրեմիում"].map((type, idx) => (
                                <label key={idx} className="block cursor-pointer text-[18px] hover:text-blue-600">
                                    <input type="radio" name="type" className="mr-[8px]" />
                                    {type}
                                </label>
                            ))}
                        </div>

                        <p className="text-gray-700 py-[10px] font-medium mb-[10px] border-b">Գեղեցիկ համարներ</p>
                        <select className="w-full border border-gray-300 rounded-[20px] px-[15px] py-[10px] mb-[30px]">
                            <option value="">Ընտրել</option>
                            {["Պլատին", "Ստանդարտ", "Նիկել", "Ոսկի", "Արծաթ", "Դասական"].map((opt, idx) => (
                                <option key={idx} value={opt}>{opt}</option>
                            ))}
                        </select>

                        <button className="w-full py-[12px] text-white text-[18px] bg-[#f04d4d] rounded-[20px] hover:bg-[#e03a3a] transition mb-[15px]">
                            Ցուցադրել արդյունքները
                        </button>

                        <button className="w-full py-[12px] text-[#f04d4d] border border-[#f04d4d] text-[15px] rounded-[20px] bg-white hover:bg-[#fff0f0] transition">
                            Մաքրեք ֆիլտրերը
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
