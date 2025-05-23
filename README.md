# 🎉 Hapenzo - Event Decoration Services

**Hapenzo** is a modern React-based web application offering seamless event decoration services. It features an elegant UI, responsive layout, and a complete user flow—from package browsing to order confirmation.

🚀 [**Live Demo**](https://hapenzo.netlify.app)

---

## ✨ Features

- **Modern UI**: Sleek, responsive design built with React
- **Package Catalog**: Explore a variety of decoration packages with detailed info
- **Cart Functionality**: Add/remove packages, manage quantities, auto price calculations
- **Checkout & Order Confirmation**: Complete booking workflow with customer/event details
- **Mobile Friendly**: Optimized for all devices using Flexbox and CSS Grid

---

## 🛠️ Tech Stack

- **React 18**
- **React Router v6**
- **React Toastify**
- **Material Icons**
- **CSS3 (Flexbox & Grid)**
- **Netlify** (for deployment)

---

## 📦 Installation

```bash
git clone <repository-url>
cd hapenzo
npm install
npm start
```

The app will be available at: `http://localhost:3000`

---

## 🔧 Configuration

To connect with your backend/API, create a `.env` file in the root directory:

```env
REACT_APP_API_URL=your_api_url_here
```

---

## 📂 Project Structure

```
hapenzo/
  ├── public/
  │   └── index.html
  ├── src/
  │   ├── components/
  │   │   ├── Cart/
  │   │   ├── Checkout/
  │   │   ├── Home/
  │   │   ├── Navbar/
  │   │   ├── OrderConfirmation/
  │   │   └── Packages/
  │   ├── context/
  │   │   └── CartContext.js
  │   ├── App.js
  │   └── index.js
  ├── package.json
  └── README.md
```

---

## 🧭 Feature Overview

### 🏠 Home Page
- Hero banner with CTA
- Featured packages
- Key service highlights

### 📦 Packages
- Grid display of decoration packages
- Each package includes name, price, rating, and description

### 🛒 Cart
- Add/remove packages
- Adjust quantity
- Automatic GST and price calculation

### ✅ Order Confirmation
- Display of order summary, event details, and customer info

---

## 🏗️ Build for Production

```bash
npm run build
```

Creates an optimized build in the `build/` folder.

---

## 🌐 Deployment

Hapenzo is configured for **Netlify** deployment.

### `netlify.toml`

```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🧪 Available Scripts

- `npm start` – Run development server
- `npm test` – Launch test runner
- `npm run build` – Create production build
- `npm run eject` – Eject CRA configuration (use with caution)

---

## 🤝 Contributing

1. Fork the repo
2. Create your branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request
