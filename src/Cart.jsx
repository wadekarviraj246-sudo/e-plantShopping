import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './Cart.css';

function Cart() {
  const items = useSelector((state) => state.cart.items);

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <p><strong>Total Items:</strong> {totalItems}</p>

          {items.map((item) => (
            <CartItem key={item.name} item={item} />
          ))}

          <div className="cart-total">
            Total Cart Amount: ${totalAmount}
          </div>

          {/* CONTINUE SHOPPING */}
          <button
            className="continue-button"
            onClick={() => window.location.reload()}
          >
            Continue Shopping
          </button>

          {/* CHECKOUT */}
          <button
            className="checkout-button"
            onClick={() => alert('Coming Soon')}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
