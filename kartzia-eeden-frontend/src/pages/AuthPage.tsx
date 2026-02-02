import React, { useState } from 'react';
import { LoginForm } from '../components/auth/LoginForm';
import { SignupForm } from '../components/auth/SignupForm';

interface AuthPageProps {
  onNavigate: (page: string) => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ onNavigate }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleAuthSuccess = () => {
    onNavigate('home');
  };

  return (
    <div className="auth-page">
      <div style={{ maxWidth: '400px', margin: '4rem auto', padding: '0 1rem' }}>
        <div
          style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ marginTop: 0 }}>
              {isLogin ? 'Login' : 'Create Account'}
            </h1>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              {isLogin
                ? 'Sign in to your account'
                : 'Join us today and start shopping'}
            </p>
          </div>

          {/* Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '2rem',
              borderBottom: '2px solid #eee',
            }}
          >
            <button
              onClick={() => setIsLogin(true)}
              style={{
                flex: 1,
                padding: '1rem',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: isLogin ? '3px solid #007bff' : 'none',
                color: isLogin ? '#007bff' : '#666',
                fontSize: '1rem',
                fontWeight: isLogin ? 'bold' : 'normal',
                cursor: 'pointer',
              }}
              aria-selected={isLogin}
              role="tab"
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              style={{
                flex: 1,
                padding: '1rem',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: !isLogin ? '3px solid #007bff' : 'none',
                color: !isLogin ? '#007bff' : '#666',
                fontSize: '1rem',
                fontWeight: !isLogin ? 'bold' : 'normal',
                cursor: 'pointer',
              }}
              aria-selected={!isLogin}
              role="tab"
            >
              Sign Up
            </button>
          </div>

          {/* Forms */}
          {isLogin ? (
            <LoginForm onSuccess={handleAuthSuccess} />
          ) : (
            <SignupForm onSuccess={handleAuthSuccess} />
          )}

          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <p style={{ color: '#666', marginBottom: 0 }}>
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <button
                onClick={() => setIsLogin(!isLogin)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#007bff',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  fontSize: '1rem',
                }}
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>

          <button
            onClick={() => onNavigate('home')}
            style={{
              width: '100%',
              padding: '0.75rem',
              marginTop: '1rem',
              backgroundColor: '#f0f0f0',
              color: '#333',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};
