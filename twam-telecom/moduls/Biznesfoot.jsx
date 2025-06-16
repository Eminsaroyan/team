import Biznesfootregistor from "./Biznesfootregistor";

export default function () {
    return (
        <div>
            <Biznesfootregistor />
            <div className="flex flex-col justify-center items-center bg-[#143046] pt-[110px] pb-[50px] text-[#ffffff]">
                <h1 className="mb-[100px] text-[60px]">Վիրտուալ ԱՀԿ</h1>

                <div className="flex mb-[100px] items-start">
                    <div className="w-[250px] flex flex-col items-center text-center mr-[30px]">
                        <img
                            src="https://www.telecomarmenia.am/img/virtual-icon-1.png"
                            alt=""
                            className="w-full mb-[20px]"
                        />
                        <p>Զանգերի բաշխում. ոչ մի բաց թողնված զանգ</p>
                    </div>
                    <div className="w-[250px] flex flex-col items-center text-center mr-[30px]">
                        <img
                            src="https://www.telecomarmenia.am/img/virtual-icon-2.png"
                            alt=""
                            className="w-full mb-[20px]"
                        />
                        <p>Հեռախոսազանգերի ձայնագրություն և զանգերի վիճակագրություն</p>
                    </div>
                    <div className="w-[250px] flex flex-col items-center text-center mr-[30px]">
                        <img
                            src="https://www.telecomarmenia.am/img/virtual-icon-3.png"
                            alt=""
                            className="w-full mb-[20px]"
                        />
                        <p>Ձայնային օգնական հաճախորդների համար</p>
                    </div>
                </div>

                <button className="bg-[#FF0000] text-[#ffffff] pr-[120px] pl-[120px] pt-[15px] pb-[15px] border-none rounded-[10px]">
                    Մանրամասն
                </button>
            </div>

        </div>
    )
}