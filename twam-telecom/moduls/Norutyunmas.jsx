export default function Nor({ image, mouth, name }) {
    return (
        <div className="w-[450px] h-[360px] mb-[25px] border border-[#9E9E9E] rounded-[12px] ">
            <img src={image} alt="" className="w-[100%] mb-[5px] h-[250px] rounded-[12px]" />
            <p className="mt-[6px] mb-[10px] text-[#9E9E9E] text-[12px]">{mouth}</p>
            <p className="text-[18px] text-[20px] leading-[24px] mb-[10px]">
                {name}
            </p>
        </div>
    );
}