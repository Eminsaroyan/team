import Fut from '../moduls/Fut';
import Biznesbajin from './Biznesbajin';
import Biznesbajiner from './Biznesbajiner';
import Biznesfoot from './Biznesfoot';
import Biznesnav from './Business-nav';
import Headerone from './Hederone';
import Kapisakagner from './Kapisakagner';

export default function Business() {
  return (
    <>
      <div className="p-4">
        <Headerone />
        <Biznesnav />
        <Biznesbajin />
        <Kapisakagner />
        <Biznesbajiner />
        <Biznesfoot />
      </div>
      <Fut />
    </>
  );
}