import React, { useEffect, useState } from 'react';
import { LoadingState } from '../shared/errors/LoadingState';
import { ErrorState } from '../shared/errors/ErrorState';
import { EmptyState } from '../shared/errors/EmptyState';
import { orderApi } from '../../utils/api/endpoints';

interface Order {
  id: string;
  date: string;
  total: number;
  status: string;
  items: number;
}

interface OrderHistoryProps {
  // BUG FIX: accept onNavigate so navigation doesn't reload the page
  onNavigate?: (page: string) => void;
}

const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
  delivered: { bg: '#d4edda', color: '#155724' },
  shipped: { bg: '#cce5ff', color: '#004085' },
  processing: { bg: '#fff3cd', color: '#856404' },
  confirmed: { bg: '#d1ecf1', color: '#0c5460' },
  cancelled: { bg: '#f8d7da', color: '#721c24' },
  returned: { bg: '#e2e3e5', color: '#383d41' },
};

export const OrderHistory: React.FC<OrderHistoryProps> = ({ onNavigate }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOrders = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await orderApi.getOrders();
      if (!result.success) {
        throw new Error(result.error || 'Failed to fetch orders');
      }
      const data = result.data as { orders: Order[] };
      setOrders(data?.orders ?? []);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to fetch orders';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (isLoading) return <LoadingState message="Loading your orders..." />;

  if (error) return <ErrorState message={error} onRetry={fetchOrders} />;

  if (orders.length === 0) {
    return (
      <EmptyState
        title="No Orders Yet"
        message="You haven't placed any orders yet. Start shopping now!"
        action={
          onNavigate
            ? { label: 'Start Shopping', onClick: () => onNavigate('home') }
            : undefined
        }
      />
    );
  }

  return (
    <div className="order-history">
      <h2>Order History</h2>
      <table
        style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}
        role="table"
        aria-label="Order history"
      >
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd' }}>
            <th style={{ textAlign: 'left', padding: '1rem', fontWeight: 'bold' }}>Order ID</th>
            <th style={{ textAlign: 'center', padding: '1rem', fontWeight: 'bold' }}>Date</th>
            <th style={{ textAlign: 'center', padding: '1rem', fontWeight: 'bold' }}>Items</th>
            <th style={{ textAlign: 'right', padding: '1rem', fontWeight: 'bold' }}>Total</th>
            <th style={{ textAlign: 'center', padding: '1rem', fontWeight: 'bold' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            const statusStyle = STATUS_COLORS[order.status] ?? STATUS_COLORS.processing;
            return (
              <tr key={order.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '1rem', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                  {order.id}
                </td>
                <td style={{ textAlign: 'center', padding: '1rem' }}>
                  {new Date(order.date).toLocaleDateString()}
                </td>
                <td style={{ textAlign: 'center', padding: '1rem' }}>{order.items}</td>
                <td style={{ textAlign: 'right', padding: '1rem', fontWeight: 'bold' }}>
                  ${order.total.toFixed(2)}
                </td>
                <td style={{ textAlign: 'center', padding: '1rem' }}>
                  <span
                    style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '4px',
                      backgroundColor: statusStyle.bg,
                      color: statusStyle.color,
                      fontSize: '0.875rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
