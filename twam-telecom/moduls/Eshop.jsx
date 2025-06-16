
import Fut from '../moduls/Fut';
import Eshopbajin from './Eshopbajin';
import Kapisakagner from './Kapisakagner';

export default function Business() {
  return (
    <>
      <div>
        <Eshopbajin />
        <Kapisakagner />
      </div>
      <Fut />
    </>
  );
}