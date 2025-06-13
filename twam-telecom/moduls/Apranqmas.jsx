import { useCartStore } from './store';
import { Heart } from 'lucide-react';

export default function Apranqmas({ id, image, name, gin, aparic }) {
    const toggleProduct = useCartStore((state) => state.toggleProduct);
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
    const isInCart = useCartStore((state) => state.isInCart(id));

    const handleHeartClick = () => {
        if (isInCart) {
            decreaseQuantity({ id, name, image, gin, aparic });
        } else {
            toggleProduct({ id, name, image, gin, aparic });
        }
    };

    return (
        <div className="relative flex flex-col items-center border border-[#9E9E9E] w-[400px] h-[600px] rounded-[12px] p-[10px] ">
            <button onClick={handleHeartClick} className="absolute top-2 right-[25px]">
                <Heart color={isInCart ? 'red' : 'gray'} fill={isInCart ? 'red' : 'none'} />
            </button>
            <p className="w-[300px] text-[18px] mb-[10px]">{name}</p>
            <p className="text-[18px] mb-[10px]">{gin}</p>
            <img src={image} alt={name} className="w-[100%] mb-[5px] h-[px] rounded-[12px]" />
            <p className="text-[18px] mb-[10px]">{aparic}</p>
        </div>
    );
}
