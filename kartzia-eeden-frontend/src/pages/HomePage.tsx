import React from 'react';
import { useCartStore } from '../context/cartStore';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { addItem } = useCartStore();

  const sampleProducts = [
    {
      id: '1',
      name: 'Premium Leather Bag',
      price: 79.99,
      image: '👜',
      description: 'High-quality leather bag perfect for daily use',
    },
    {
      id: '2',
      name: 'Wireless Headphones',
      price: 129.99,
      image: '🎧',
      description: 'Premium sound quality with noise cancellation',
    },
    {
      id: '3',
      name: 'Smart Watch',
      price: 199.99,
      image: '⌚',
      description: 'Stay connected with latest smartwatch features',
    },
    {
      id: '4',
      name: 'Photography Camera',
      price: 899.99,
      image: '📷',
      description: 'Professional grade camera for photography enthusiasts',
    },
  ];

  const handleAddToCart = (product: typeof sampleProducts[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '4rem 2rem',
          textAlign: 'center',
          marginBottom: '3rem',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginTop: 0, marginBottom: '1rem' }}>
          Welcome to Kartzia Eeden
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
          Premium products for the modern lifestyle
        </p>
        <button
          onClick={() => onNavigate('products')}
          style={{
            padding: '0.75rem 2rem',
            backgroundColor: 'white',
            color: '#667eea',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
          aria-label="Start shopping"
        >
          Start Shopping
        </button>
      </section>

      {/* Featured Products */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Featured Products</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          {sampleProducts.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: 'white',
                border: '1px solid #eee',
                borderRadius: '8px',
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)';
                (e.currentTarget as HTMLElement).style.boxShadow =
                  '0 8px 16px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow =
                  '0 2px 8px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                {product.image}
              </div>
              <h3 style={{ marginTop: 0 }}>{product.name}</h3>
              <p style={{ color: '#666', minHeight: '2.5rem' }}>
                {product.description}
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#007bff' }}>
                ${product.price.toFixed(2)}
              </p>
              <button
                onClick={() => handleAddToCart(product)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
                aria-label={`Add ${product.name} to cart`}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section
        style={{
          backgroundColor: '#f9f9f9',
          padding: '3rem 2rem',
          marginTop: '3rem',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Why Choose Us?</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              { icon: '🚚', title: 'Fast Shipping', desc: 'Free shipping on orders over $50' },
              { icon: '💰', title: 'Best Prices', desc: 'Competitive pricing guaranteed' },
              { icon: '🛡️', title: 'Secure', desc: 'Safe and secure checkout' },
              { icon: '⭐', title: 'Quality', desc: 'Premium quality products' },
            ].map((feature, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p style={{ color: '#666' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          backgroundColor: '#667eea',
          color: 'white',
          padding: '3rem 2rem',
          textAlign: 'center',
          marginTop: '3rem',
        }}
      >
        <h2>Ready to Start Shopping?</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          Browse our collection and find your perfect products
        </p>
        <button
          onClick={() => onNavigate('products')}
          style={{
            padding: '0.75rem 2rem',
            backgroundColor: 'white',
            color: '#667eea',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
          aria-label="Browse all products"
        >
          Browse All Products
        </button>
      </section>
    </div>
  );
};
