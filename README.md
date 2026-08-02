# Novacart

A responsive, SaaS-style e-commerce frontend built with **React**, **Tailwind CSS**, and **Redux Toolkit**. 

Instead of a traditional retail layout, Novacart uses a dark-mode glassmorphism UI, full user authentication with protected routes, a slide-over cart drawer, and live product data fetched from the DummyJSON API.

---

## Tech Stack

*   **Frontend:** React (Vite)
*   **Routing:** React Router (SPA navigation & Protected Routes)
*   **Forms & Validation:** React Hook Form
*   **State Management:** Redux Toolkit (Cart state + LocalStorage persistence)
*   **Styling:** Tailwind CSS (Custom glassmorphic overlays and backdrop blurs)
*   **Icons:** Lucide React
*   **API / Data:** DummyJSON REST API

---

## Key Features

*   **Authentication & Protected DOM:** Secure Login and Registration flows. Protected route wrappers prevent unauthenticated users from accessing the Shop, Cart, or Product Details pages.
*   **SaaS-Style UI:** High-contrast dark mode with glowing ambient gradients and translucent UI cards.
*   **Performant Form Handling:** Forms built using React Hook Form for clean validation rules and minimal component re-renders.
*   **Filter & Search Console:** Unified control bar to search by keyword, filter by category, sort by price/rating, and remove active filter chips.
*   **Slide-Over Cart Drawer:** Right-side drawer with real-time subtotal calculations, item quantity controls, and cart clearing.
*   **Dynamic Product Cards:** Shows calculated original prices (strikethrough), stock warnings, and a smart "Added to Cart" state.
*   **Product Details Page (PDP):** Includes an interactive thumbnail gallery, stock counter, and a recommended products grid capped at 4 items.
*   **Persistent Cart:** Cart state survives page refreshes using automatic Redux-to-LocalStorage background syncing.

---

## What I Learned

*   **Route Guarding (Protected DOM):** How to wrap React Router routes in an authentication guard to block unauthorized access and redirect users back to the login screen.
*   **Form Validation Architecture:** Using React Hook Form to handle input tracking, error states, and submission workflows cleanly without cluttering components with custom `onChange` handlers.
*   **Global vs. Local State:** How to decide when a component should manage its own state versus when it needs to be lifted into Redux (e.g., button states that depend on drawer actions).
*   **DRY LocalStorage Syncing:** How to persist a Redux store cleanly without installing heavy middleware libraries like `redux-persist`.
*   **Defensive API Rendering:** Handling third-party API data safely with default fallbacks so missing fields (`null` images, missing discounts) never crash the UI.

---

## Challenges Faced & How I Solved Them

### 1. Protecting Routes Without UI Flickering
*   **The Problem:** When refreshing the page on a protected route (like `/shop`), the app would momentarily flash the Login screen before recognizing that the user was already logged in.
*   **The Fix:** Updated the Auth Provider to check `localStorage` synchronously during its initial render state before mounting the `<RouterProvider />`. If an auth token exists, the protected layout mounts immediately without route layout shifts.

### 2. The "Added" Button Desync Bug
*   **The Problem:** Clicking *"Add to Cart"* changed the card button to a disabled green *"✓ Added"* state. However, when the user removed that item from inside the cart drawer, the card button stayed permanently stuck on *"Added"*.
*   **The Fix:** Removed local `useState` toggles from the `<ProductCard />`. Instead, the button's state is derived directly from the global Redux store:
    ```javascript
    const isInCart = cart.some((cartItem) => cartItem.id === id);
    ```
    Whenever an item is removed from the drawer, Redux re-renders the grid and the button immediately resets back to *"Add"*.

### 3. Working Around DummyJSON's Static Review Data
*   **The Problem:** Every product from the API returned exactly `3` reviews, making the UI look fake when every card showed *"(3 reviews)"*.
*   **The Fix:** Instead of using `Math.random()`—which causes numbers to jump around on every re-render—I wrote a deterministic formula using the product's unique ID:
    ```javascript
    const reviewCount = reviews.length > 3 ? reviews.length : ((id * 37) % 280) + 45;
    ```
    This generates realistic review counts (e.g., `119`, `193`, `82`) that stay consistent across page reloads.

### 4. Clean LocalStorage Persistence in Redux
*   **The Problem:** Copy-pasting `localStorage.setItem()` inside every single reducer (`addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`) created messy, repetitive boilerplate.
*   **The Fix:** Used Redux's `store.subscribe()` listener inside `store.js`. It listens for any state modification in the background and automatically writes the updated cart array to `localStorage` in one place.

---

### Tahnks for checking out Novacart! If you have any questions, feel free to reach out.