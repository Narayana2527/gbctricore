import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCartQuantity } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  console.log("Cart Items:", cartItems); // Debugging log

  return (
    <div className="p-4">
      <h2 className="text-2xl">Shopping Cart</h2>
      {cartItems.length === 0 ? <p>Cart is empty</p> : cartItems.map((item) => (
        <div key={item.id} className="flex justify-between border p-2">
          <h3>{item.title}</h3>
          <div>
            <button 
              onClick={() => dispatch(updateCartQuantity({ id: item.id, quantity: item.quantity - 1 }))} 
              disabled={item.quantity <= 1}
            >
              -
            </button>
            {item.quantity}
            <button onClick={() => dispatch(updateCartQuantity({ id: item.id, quantity: item.quantity + 1 }))}>
              +
            </button>
            <button onClick={() => dispatch(removeFromCart(item.id))} className="ml-4">🗑️</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
