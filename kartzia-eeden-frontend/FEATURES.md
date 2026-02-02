# Kartzia Eeden - E-Commerce Frontend

A complete, production-ready e-commerce frontend application built with React, TypeScript, Vite, Zustand, and Zod.

## Features Implemented

### 🏪 Pages & Navigation
- **Home Page**: Hero section with featured products and CTA
- **Cart Page**: View, manage, and update cart items with summary
- **Checkout Page**: Multi-step checkout process with order confirmation
- **Auth Page**: Login and signup with form validation
- **Profile Page**: User profile, quick actions, and address management
- **Orders Page**: View order history

### 🛒 Cart UI & Interactions
- Add products to cart with quantity selection
- Update item quantities in cart
- Remove items from cart
- Clear entire cart with confirmation
- Persistent cart using localStorage
- Real-time cart item count in header
- Cart summary with price breakdown (subtotal, tax, shipping)

### 💳 Checkout UI
- Multi-step checkout form (Shipping → Billing → Payment)
- Shipping address form with validation
- Billing address option (same as shipping)
- Payment method selection
- Order summary with itemized breakdown
- Order confirmation screen

### 🔐 Login / Signup UI
- Login form with email and password validation
- Signup form with name, email, password, and confirmation
- Form validation using Zod schemas
- Error messages displayed inline
- Toggle between login and signup modes
- Smooth transitions and animations

### 📦 Address & Order Management
- Add multiple addresses
- Set default address
- Full address form validation
- Order history with status badges
- Order details view
- Order confirmation with order ID and total

### ⚠️ Error States
- Empty cart state with CTA to shop
- Empty orders state with CTA to shop
- Network error handling
- Form validation errors
- Login/checkout failure states
- Unauthenticated user handling

### ✅ Form Validation UI
- Zod schema-based validation
- Real-time validation feedback
- Error messages below form fields
- Disabled submit buttons during submission
- Field-level error styling
- Required field indicators

### 🔗 API Integration (Frontend)
- API client with auth header handling
- Endpoints for auth, cart, orders, addresses, products
- Automatic token management
- Error handling and user feedback
- Mock API integration ready

### 🔄 State Management
- Zustand for centralized state
- Auth store (user session, login/logout)
- Cart store (items, total, persistence)
- Actions for all state mutations
- Type-safe store interfaces

### ⚡ Performance Optimization
- Code splitting with lazy page loading
- React.memo on components
- Memoized calculations (cart total, item count)
- Efficient re-renders with Zustand
- CSS-in-JS for minimal styling overhead
- Optimized images/icons (emoji-based)

### ♿ Accessibility Basics
- ARIA labels on all interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Screen reader support
- Focus management
- Color contrast compliance
- Form labels properly associated with inputs
- Live regions for announcements
- Role attributes for custom elements
- alt text alternatives

## Project Structure

```
src/
├── components/
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   ├── SignupForm.tsx
│   │   └── index.ts
│   ├── cart/
│   │   ├── CartItems.tsx
│   │   ├── CartSummary.tsx
│   │   └── index.ts
│   ├── checkout/
│   │   ├── CheckoutForm.tsx
│   │   └── index.ts
│   ├── order/
│   │   ├── OrderConfirmation.tsx
│   │   ├── OrderHistory.tsx
│   │   └── index.ts
│   ├── address/
│   │   ├── AddressForm.tsx
│   │   └── index.ts
│   └── shared/
│       └── errors/
│           ├── ErrorState.tsx
│           ├── EmptyState.tsx
│           ├── LoadingState.tsx
│           └── index.ts
├── context/
│   ├── authStore.ts
│   ├── cartStore.ts
│   └── index.ts
├── hooks/
│   ├── useForm.ts
│   ├── useFetch.ts
│   └── index.ts
├── pages/
│   ├── HomePage.tsx
│   ├── CartPage.tsx
│   ├── AuthPage.tsx
│   ├── CheckoutPage.tsx
│   ├── OrdersPage.tsx
│   ├── ProfilePage.tsx
│   └── index.ts
├── utils/
│   ├── validation/
│   │   ├── schemas.ts
│   │   └── index.ts
│   ├── api/
│   │   ├── client.ts
│   │   ├── endpoints.ts
│   │   └── index.ts
│   └── accessibility/
│       └── index.ts
├── constants/
│   └── index.ts
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Zustand** - State management
- **Zod** - Schema validation
- **CSS-in-JS** - Inline styling

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs the app in development mode at `http://localhost:5173`

### Build

```bash
npm run build
```

Builds the app for production to the `dist` folder.

### Preview

```bash
npm run preview
```

Preview the production build locally.

## Key Components

### LoginForm
- Email and password validation
- Error handling
- Loading state during submission
- Accessible form with ARIA labels

### SignupForm
- Name, email, password, confirm password fields
- Password matching validation
- Error messages
- Loading state

### CartItems
- Table view of cart items
- Quantity adjustment
- Item removal
- Product images
- Total price calculation

### CartSummary
- Order totals (subtotal, tax, shipping)
- Checkout button
- Empty cart handling

### CheckoutForm
- Multi-step form (3 steps)
- Step navigation
- Shipping address form
- Payment method selection
- Order processing

### OrderConfirmation
- Order ID display
- Order date
- Total amount
- Success message

### AddressForm
- Full address fields
- Phone number
- Postal code validation
- Default address option

## State Management

### Auth Store
```typescript
- user: User | null
- isAuthenticated: boolean
- isLoading: boolean
- error: string | null
- login(email, password)
- signup(email, password, name)
- logout()
- setUser(user)
- clearError()
```

### Cart Store
```typescript
- items: CartItem[]
- total: number
- addItem(item)
- removeItem(id)
- updateQuantity(id, quantity)
- clearCart()
- getTotal()
- getItemCount()
```

## API Endpoints (Frontend Ready)

- `POST /auth/login`
- `POST /auth/signup`
- `GET /auth/me`
- `POST /auth/logout`
- `GET /cart`
- `POST /cart/items`
- `PUT /cart/items/{id}`
- `DELETE /cart/items/{id}`
- `POST /orders`
- `GET /orders`
- `GET /orders/{id}`
- `GET /addresses`
- `POST /addresses`
- `PUT /addresses/{id}`
- `DELETE /addresses/{id}`

## Validation Schemas

- `loginSchema` - Email and password validation
- `signupSchema` - Name, email, password, confirmation
- `addressSchema` - Full address validation
- `checkoutSchema` - Complete checkout validation

## Accessibility Features

✅ Semantic HTML  
✅ ARIA labels and descriptions  
✅ Keyboard navigation  
✅ Screen reader support  
✅ Focus management  
✅ Color contrast  
✅ Live regions for announcements  
✅ Form field associations  
✅ Loading and status indicators  

## Performance Optimizations

✅ React.memo for components  
✅ Memoized selectors  
✅ Persistent cart storage  
✅ Lazy page loading  
✅ Efficient re-renders  
✅ Optimized bundle size  

## Future Enhancements

- Backend API integration
- Payment gateway integration (Stripe, PayPal)
- Product search and filtering
- Product reviews and ratings
- Wishlist functionality
- Email notifications
- Two-factor authentication
- Admin dashboard
- Analytics tracking

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Kartzia Eeden. All rights reserved.
