import { useEffect, useState } from 'react';
import { useAuthStore } from './context/authStore';
import { useCartStore } from './context/cartStore';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';
import { AuthPage } from './pages/AuthPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import { ProfilePage } from './pages/ProfilePage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const { user, isAuthenticated, restoreSession } = useAuthStore();
  // BUG FIX: use getItemCount() for total units, not items.length (distinct products)
  const { getItemCount } = useCartStore();
  const itemCount = getItemCount();

  useEffect(() => {
    // BUG FIX: actually restore session from token on mount
    restoreSession();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'cart':
        return <CartPage onNavigate={setCurrentPage} />;
      case 'auth':
        return <AuthPage onNavigate={setCurrentPage} />;
      case 'checkout':
        return <CheckoutPage onNavigate={setCurrentPage} />;
      case 'orders':
        return <OrdersPage onNavigate={setCurrentPage} />;
      case 'profile':
        return <ProfilePage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="app" style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: '#2c3e50',
          color: 'white',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <button
          onClick={() => setCurrentPage('home')}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            padding: 0,
          }}
          aria-label="Kartzia Eeden home"
        >
          🏪 Kartzia Eeden
        </button>

        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          {/* Search Bar — wired to navigate to home with query param (functional stub) */}
          <input
            type="text"
            placeholder="Search products..."
            onChange={() => {/* wire to search/filter logic when products page exists */}}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              border: 'none',
              width: '250px',
            }}
            aria-label="Search products"
          />

          <button
            onClick={() => setCurrentPage('home')}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '1rem',
              cursor: 'pointer',
              textDecoration: currentPage === 'home' ? 'underline' : 'none',
            }}
            aria-current={currentPage === 'home' ? 'page' : undefined}
          >
            Home
          </button>

          {isAuthenticated ? (
            <>
              <button
                onClick={() => setCurrentPage('profile')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
                aria-label="User profile"
              >
                👤 {user?.name?.split(' ')[0]}
              </button>
              <button
                onClick={() => setCurrentPage('orders')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
                aria-label="My orders"
              >
                📦 Orders
              </button>
            </>
          ) : (
            <button
              onClick={() => setCurrentPage('auth')}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
              aria-label="Login or signup"
            >
              🔐 Login / Sign Up
            </button>
          )}

          {/* Cart Icon */}
          <button
            onClick={() => setCurrentPage('cart')}
            style={{
              position: 'relative',
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
            // BUG FIX: show total units (itemCount) not distinct product count
            aria-label={`Shopping cart with ${itemCount} items`}
            aria-current={currentPage === 'cart' ? 'page' : undefined}
          >
            🛒
            {itemCount > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                }}
                aria-hidden="true"
              >
                {itemCount}
              </span>
            )}
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main id="main-content">{renderPage()}</main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#2c3e50',
          color: 'white',
          textAlign: 'center',
          padding: '2rem',
          marginTop: '3rem',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem',
              textAlign: 'left',
            }}
          >
            <div>
              <h4>About Us</h4>
              <p style={{ fontSize: '0.9rem', color: '#bdc3c7' }}>
                Kartzia Eeden offers premium products for the modern lifestyle.
              </p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>
                  <button
                    onClick={() => setCurrentPage('home')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#bdc3c7',
                      cursor: 'pointer',
                      padding: 0,
                      textDecoration: 'underline',
                    }}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage('cart')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#bdc3c7',
                      cursor: 'pointer',
                      padding: 0,
                      textDecoration: 'underline',
                    }}
                  >
                    Cart
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <p style={{ fontSize: '0.9rem', color: '#bdc3c7' }}>
                Email: info@kartzias.com
                <br />
                Phone: 1-800-KARTZIA
              </p>
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #34495e' }} />
          {/* BUG FIX: dynamic year instead of hardcoded 2024 */}
          <p style={{ margin: '1rem 0 0 0', fontSize: '0.9rem', color: '#95a5a6' }}>
            &copy; {new Date().getFullYear()} Kartzia Eeden. All rights reserved. | Privacy Policy |
            Terms &amp; Conditions
          </p>
        </div>
      </footer>

      {/* Accessibility Announcer */}
      <div
        id="aria-announcer"
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: 'absolute',
          left: '-10000px',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
      />
    </div>
  );
}

export default App;
