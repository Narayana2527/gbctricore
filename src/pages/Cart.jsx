import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCartQuantity, clearCart } from "../redux/cartSlice";
import { updateStock } from "../redux/productSlice";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 0) quantity = 0;
    dispatch(updateCartQuantity({ id, quantity }));
  };

  const handlePurchase = () => {
    cartItems.forEach(item => dispatch(updateStock({ id: item.id, quantity: item.quantity })));
    dispatch(clearCart());
    alert("Purchase successful! Stock updated.");
  };
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">Shopping Cart</h2>

            {cartItems.length === 0 ? (
              <p className="text-center text-muted">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
                  <div>
                    <h5 className="mb-1" style={{ fontSize: "18px",color:"#1d75c1" }}>{item.title}</h5>
                    <p className="text-muted mb-0">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="d-flex align-items-center">
                    <button 
                      className="btn btn-outline-secondary btn-sm me-2"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      disabled={item.quantity === 0}
                    >
                      -
                    </button>

                    <span className="px-3 py-2 border rounded">{item.quantity}</span>

                    <button 
                      className="btn btn-outline-primary btn-sm ms-2"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </button>

                    <button 
                      onClick={() => handleRemove(item.id)}
                      className="btn btn-danger btn-sm ms-3"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}

            <div className="text-end mt-4">
              <p className="h5">Total: <strong>${totalPrice.toFixed(2)}</strong></p>
              <button className="btn btn-success btn-lg mt-2" onClick={handlePurchase}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
