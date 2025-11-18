import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCartQuantity } from "../redux/cartSlice";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, qty) => {
    dispatch(updateCartQuantity({ id, qty }));
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? <p>Your cart is empty.</p> : (
        cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b py-3">
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-500">${item.price}</p>
            </div>
            <div className="flex items-center space-x-3">
              <button onClick={() => handleQuantityChange(item.id, item.qty - 1)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => handleQuantityChange(item.id, item.qty + 1)}>+</button>
              <button onClick={() => handleRemove(item.id)} className="text-red-500">Remove</button>
            </div>
          </div>
        ))
      )}
      <div className="mt-4 text-right">
        <p className="font-bold">Total: ${totalPrice.toFixed(2)}</p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
