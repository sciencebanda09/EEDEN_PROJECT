import React from 'react';
import { OrderHistory } from '../components/order/OrderHistory';
import { LoadingState } from '../components/shared/errors/LoadingState';

interface OrdersPageProps {
  onNavigate: (page: string) => void;
}

export const OrdersPage: React.FC<OrdersPageProps> = ({ onNavigate }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

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

        {isLoading ? <LoadingState message="Loading your orders..." /> : <OrderHistory />}
      </div>
    </div>
  );
};
