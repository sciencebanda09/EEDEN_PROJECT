import React, { useState } from 'react';
import { CheckoutForm } from '../components/checkout/CheckoutForm';
import { OrderConfirmation } from '../components/order/OrderConfirmation';
import { useCartStore } from '../context/cartStore';

interface CheckoutPageProps {
  onNavigate: (page: string) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ onNavigate }) => {
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderId, setOrderId] = useState<string>('');
  const { items, getTotal, clearCart } = useCartStore();

  const handleOrderSuccess = (newOrderId: string) => {
    setOrderId(newOrderId);
    setOrderConfirmed(true);
    clearCart();
  };

  if (items.length === 0 && !orderConfirmed) {
    return (
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <div
          style={{
            backgroundColor: '#fff3cd',
            border: '1px solid #ffc107',
            borderRadius: '4px',
            padding: '2rem',
            textAlign: 'center',
          }}
          role="alert"
        >
          <h2>Your cart is empty</h2>
          <p>Please add items to your cart before proceeding to checkout</p>
          <button
            onClick={() => onNavigate('home')}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  if (orderConfirmed) {
    return (
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <OrderConfirmation
          orderId={orderId}
          orderDate={new Date().toISOString()}
          total={getTotal()}
        />
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button
            onClick={() => onNavigate('orders')}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '1rem',
            }}
          >
            View Orders
          </button>
          <button
            onClick={() => onNavigate('home')}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
        <h1>Checkout</h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 350px',
            gap: '2rem',
          }}
        >
          <div>
            <CheckoutForm onSuccess={handleOrderSuccess} />
          </div>

          <div
            style={{
              backgroundColor: '#f9f9f9',
              padding: '1.5rem',
              borderRadius: '8px',
              height: 'fit-content',
            }}
          >
            <h3 style={{ marginTop: 0 }}>Order Summary</h3>
            <div style={{ marginBottom: '1rem' }}>
              {items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingBottom: '0.5rem',
                    marginBottom: '0.5rem',
                    borderBottom: '1px solid #eee',
                  }}
                >
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <hr style={{ margin: '1rem 0', border: 'none', borderTop: '2px solid #ddd' }} />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '1.25rem',
                fontWeight: 'bold',
              }}
            >
              <span>Total:</span>
              <span>${getTotal().toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <button
            onClick={() => onNavigate('cart')}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            aria-label="Back to cart"
          >
            ← Back to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
