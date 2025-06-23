import { Link } from 'react-router-dom';

export default function Teamtvlink() {
  return (
    <div className="max-w-[1330px]">
      <Link to="/" className="text-[#000000] text-[14px] mr-[12px] hover:no-underline">Գլխավոր</Link>
      <span className="text-[14px] mr-[12px]">&gt;</span>
      <Link to="/teamhavelvac " className="text-[#000000] text-[14px] mr-[12px] hover:no-underline">Team հավելվածներ</Link>
    </div>
  );
}