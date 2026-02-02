import React from 'react';
import { AddressForm } from '../components/address/AddressForm';
import { useAuthStore } from '../context/authStore';

interface ProfilePageProps {
  onNavigate: (page: string) => void;
}

export const ProfilePage: React.FC<ProfilePageProps> = ({ onNavigate }) => {
  const { user, logout } = useAuthStore();
  const [editingAddress, setEditingAddress] = React.useState(false);

  const handleAddressSave = () => {
    setEditingAddress(false);
  };

  const handleLogout = () => {
    logout();
    onNavigate('home');
  };

  if (!user) {
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
          <h2>Please log in to view your profile</h2>
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
    <div className="profile-page">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <h1>My Profile</h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          {/* User Info */}
          <div
            style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '8px',
              border: '1px solid #eee',
            }}
          >
            <h2 style={{ marginTop: 0 }}>User Information</h2>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: '#666', marginBottom: '0.5rem' }}>
                Name
              </label>
              <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>
                {user.name}
              </p>
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: '#666', marginBottom: '0.5rem' }}>
                Email
              </label>
              <p style={{ margin: 0, fontSize: '1.1rem' }}>{user.email}</p>
            </div>
            {user.phone && (
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', color: '#666', marginBottom: '0.5rem' }}>
                  Phone
                </label>
                <p style={{ margin: 0, fontSize: '1.1rem' }}>{user.phone}</p>
              </div>
            )}
            <button
              onClick={handleLogout}
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
              aria-label="Logout"
            >
              Logout
            </button>
          </div>

          {/* Quick Actions */}
          <div
            style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '8px',
              border: '1px solid #eee',
            }}
          >
            <h2 style={{ marginTop: 0 }}>Quick Actions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button
                onClick={() => onNavigate('orders')}
                style={{
                  padding: '1rem',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                }}
              >
                📦 View Orders
              </button>
              <button
                onClick={() => onNavigate('cart')}
                style={{
                  padding: '1rem',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                }}
              >
                🛒 My Cart
              </button>
              <button
                onClick={() => onNavigate('home')}
                style={{
                  padding: '1rem',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                }}
              >
                🏪 Continue Shopping
              </button>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div
          style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            border: '1px solid #eee',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem',
            }}
          >
            <h2 style={{ margin: 0 }}>Addresses</h2>
            <button
              onClick={() => setEditingAddress(!editingAddress)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: editingAddress ? '#6c757d' : '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              {editingAddress ? '✕ Cancel' : '+ Add Address'}
            </button>
          </div>

          {editingAddress && (
            <div style={{ marginBottom: '2rem' }}>
              <AddressForm onSuccess={handleAddressSave} />
            </div>
          )}

          <div
            style={{
              backgroundColor: '#f9f9f9',
              padding: '1rem',
              borderRadius: '4px',
              textAlign: 'center',
              color: '#666',
            }}
          >
            <p>No addresses saved yet. Add one to get started with faster checkout.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
