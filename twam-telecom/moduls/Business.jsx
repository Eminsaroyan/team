import Fut from '../moduls/Fut';
import Biznesbajin from './Biznesbajin';
import Biznesbajiner from './Biznesbajiner';
import Kapisakagner from './Kapisakagner';

export default function Business() {
  return (
    <>
      <div className="p-4">
        <Biznesbajin />
        <Kapisakagner />
        <Biznesbajiner />
      </div>
      <Fut />
    </>
  );
}