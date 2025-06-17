import Fut from '../moduls/Fut';
import EshopNav from './Eshop-nav';
import Eshopbajin from './Eshopbajin';
import Eshopbajiner from './Eshopbajiner';
import Eshophamar from './Eshophamar';
import Headerone from './Hederone';

export default function Business() {
  return (
    <>
      <Headerone />
      <EshopNav />
      <Eshopbajin />
      <Eshophamar />
      <Eshopbajiner />
      <Fut />
    </>
  );
}