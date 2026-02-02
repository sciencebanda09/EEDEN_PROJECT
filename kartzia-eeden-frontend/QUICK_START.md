# Quick Start Guide

## 🚀 Get Started in 2 Minutes

### 1. Start the Development Server
```bash
npm run dev
```

Open your browser to: **http://localhost:5173/**

### 2. Explore the Application

#### 🏠 Home Page
- Beautiful hero section
- 4 featured products
- Features showcase
- Add products to cart by clicking "Add to Cart" button

#### 🛒 Shopping Cart
- Click cart icon in header (top right)
- View your items
- Adjust quantities
- Remove items or clear cart
- See real-time total with tax and shipping

#### 🔐 Login / Sign Up
- Click "🔐 Login / Sign Up" in header
- Try login with demo credentials or create a new account
- Form validation happens in real-time
- Error messages appear below fields

#### 💳 Checkout
- From cart page, click "Proceed to Checkout"
- Follow 3-step process:
  1. Enter shipping address
  2. Confirm billing address
  3. Select payment method
- Review order summary on the right
- Click "Place Order" to confirm

#### 👤 Profile
- After login, click your name in header
- View your information
- Quick action buttons
- Add and manage addresses
- View saved addresses
- Logout when done

#### 📦 Orders
- Click "📦 Orders" in header (when logged in)
- View all your orders
- See order status, date, items count, and total

### 3. Try Demo Scenarios

#### Scenario 1: Shopping Without Login
1. Home page → Featured products
2. Click "Add to Cart" on any product
3. See cart count update in header
4. Click cart icon
5. Adjust quantities
6. Try checkout (will show empty cart error if not logged in)

#### Scenario 2: Complete Purchase
1. Click "🔐 Login / Sign Up"
2. Click "Sign Up" tab
3. Fill in: Name, Email, Password, Confirm Password
4. Click "Sign Up"
5. Click cart icon
6. Click "Proceed to Checkout"
7. Fill in shipping address
8. Go to next step
9. Accept billing address
10. Go to next step
11. Select payment method
12. Click "Place Order"
13. See confirmation screen

#### Scenario 3: Manage Profile
1. Login first
2. Click your name in header
3. View your information
4. Click "👤 View Profile"
5. View quick actions
6. Click "📦 View Orders"
7. Check order history
8. Click "🏪 Continue Shopping"
9. Add more items
10. Logout

### 4. Test Validation

#### Form Validation Tests
- **Login**: Try invalid email format
- **Signup**: Try mismatched passwords
- **Address**: Try invalid phone number or postal code
- **Checkout**: Required fields show errors

#### Error States
- Empty cart → Click proceed to checkout
- Empty orders → Logged in with no orders
- Login failure → Invalid credentials

### 5. Key Interactive Features

| Feature | How to Access |
|---------|---------------|
| Add to Cart | Click "Add to Cart" on any product |
| View Cart | Click 🛒 icon in header |
| Update Quantity | Use number input in cart |
| Remove Item | Click "Remove" button in cart |
| Clear Cart | Click "Clear Cart" button, confirm |
| Login | Click "🔐 Login / Sign Up" |
| Signup | Click "Sign Up" tab in auth page |
| Checkout | From cart → "Proceed to Checkout" |
| View Profile | Click your name after login |
| View Orders | Click "📦 Orders" or from profile |
| Logout | From profile page |

### 6. Responsive Design

Test on different screen sizes:
- **Desktop** (1200px+): Full layout with sidebars
- **Tablet** (768-1024px): Stacked layout
- **Mobile** (<768px): Single column

### 7. Accessibility Features

Try keyboard navigation:
- `Tab` → Navigate between elements
- `Enter` → Activate buttons/links
- `Escape` → Close dialogs (when added)
- Screen reader → Try with NVDA/JAWS

### 8. Cart Persistence

**Your cart is saved automatically!**
1. Add items to cart
2. Refresh the page
3. Items still there (localStorage)
4. Close browser
5. Reopen → Items still there

### 9. Styles & Customization

All styling is inline CSS. To customize:

1. **Colors**: Edit color codes in constants/index.ts
2. **Spacing**: Change padding/margin values
3. **Fonts**: Add font-family to styles
4. **Layout**: Adjust grid-template-columns values

### 10. Develop & Extend

#### Add New Page
1. Create new file in `src/pages/NewPage.tsx`
2. Export from `src/pages/index.ts`
3. Import in `App.tsx`
4. Add case in renderPage() switch
5. Add navigation button

#### Add New Component
1. Create in `src/components/[section]/NewComponent.tsx`
2. Import in parent component
3. Pass props with types
4. Export from component index.ts

#### Add New Validation Schema
1. Add schema in `src/utils/validation/schemas.ts`
2. Import Zod
3. Define schema with validations
4. Export TypeScript type

#### Connect Real Backend
1. Update `API_BASE_URL` in constants
2. Update API endpoints in `utils/api/endpoints.ts`
3. Add error handling
4. Test endpoints

## 🎯 What's Working

✅ Home page with featured products  
✅ Add to cart functionality  
✅ Cart view and management  
✅ User authentication (login/signup)  
✅ Multi-step checkout process  
✅ Order confirmation  
✅ Profile management  
✅ Order history  
✅ Form validation  
✅ Error handling  
✅ Persistent cart storage  
✅ Responsive design  
✅ Accessibility features  
✅ Real-time totals and updates  

## 📱 Browser DevTools

### Console
Check for any errors or warnings

### Network
API calls will appear here (when connected to backend)

### Application
View localStorage → "cart-storage" to see saved cart

### Accessibility Tree
View ARIA labels and semantic structure

## 🐛 Troubleshooting

### Issue: Cart not showing items
- **Fix**: Check if localStorage is enabled
- **Fix**: Open DevTools → Application → Local Storage

### Issue: Forms not validating
- **Fix**: Check browser console for errors
- **Fix**: Verify Zod is installed: `npm list zod`

### Issue: Styles look broken
- **Fix**: Refresh the page (Ctrl+Shift+R)
- **Fix**: Clear browser cache

### Issue: Dev server not starting
- **Fix**: Make sure port 5173 is not in use
- **Fix**: Try different port: `npm run dev -- --port 3000`

## 📚 Documentation Files

- **IMPLEMENTATION_COMPLETE.md** - Full implementation details
- **FEATURES.md** - Detailed feature documentation
- **UI_UX_DESIGN.md** - Design system and guidelines
- **This file** - Quick start guide

## 🚀 Next Steps

1. **Build for Production**
   ```bash
   npm run build
   ```

2. **Deploy to Server**
   - Upload `dist/` folder contents
   - Set up routing for SPA

3. **Connect Backend**
   - Update API endpoints
   - Implement real authentication
   - Connect database

4. **Add Tests**
   - Unit tests
   - Integration tests
   - E2E tests

5. **Enhance Features**
   - Add product search
   - Add reviews/ratings
   - Add wishlist
   - Add notifications

## 💡 Pro Tips

1. Use DevTools React extension to inspect components
2. Use Zustand DevTools to see state changes
3. Check accessibility tree for A11y issues
4. Use keyboard-only navigation to test a11y
5. Test on mobile to verify responsive design
6. Clear localStorage to reset cart: `localStorage.clear()`

## 📞 Support

For questions about:
- **Components**: Check `src/components/`
- **State**: Check `src/context/`
- **Validation**: Check `src/utils/validation/`
- **API**: Check `src/utils/api/`
- **Types**: Check TypeScript interfaces

---

**Happy Coding! 🎉**
