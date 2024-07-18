import { FaPlus } from "react-icons/fa";

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

const server = "khdjkhkhkjhkibkh";
const ProductCard = ({
  productId,
  price,
  name,
  photo, 
  stock,
  handler,

}: ProductsProps) => {
  return <div className="product-card">

     <img src={photo} alt={name} />
     <p>{name}</p>
     <span>₹{price}</span>

    {/* overlay of silver colour when we hover*/}
     <div>
      <button onClick={() => handler()}>
        <FaPlus />
      </button>
     </div>


  </div>;
};

export default ProductCard;