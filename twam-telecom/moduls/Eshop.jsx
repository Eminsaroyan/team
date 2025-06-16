
import Fut from '../moduls/Fut';
import Eshopbajin from './Eshopbajin';

export default function Business() {
  return (
    <>
      <div className="p-4">
        <Eshopbajin />
      </div>
      <Fut />
    </>
  );
}