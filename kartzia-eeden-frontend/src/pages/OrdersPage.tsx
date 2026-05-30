import React from 'react';
import { OrderHistory } from '../components/order/OrderHistory';
import { useAuthStore } from '../context/authStore';

interface OrdersPageProps {
  onNavigate: (page: string) => void;
}

export const OrdersPage: React.FC<OrdersPageProps> = ({ onNavigate }) => {
  const { isAuthenticated } = useAuthStore();

  // Auth guard
  if (!isAuthenticated) {
    return (
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <div
          style={{
            backgroundColor: '#e7d4f5',
            border: '1px solid #b19cd9',
            borderRadius: '4px',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <h2>Please log in to view your orders</h2>
          <button
            onClick={() => onNavigate('auth')}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
          }}
        >
          <h1 style={{ margin: 0 }}>My Orders</h1>
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
            aria-label="Continue shopping"
          >
            Continue Shopping
          </button>
        </div>

        {/* BUG FIX: removed fake 1-second loading delay; OrderHistory handles its own loading state */}
        <OrderHistory onNavigate={onNavigate} />
      </div>
    </div>
  );
};
