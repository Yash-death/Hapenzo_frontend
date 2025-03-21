# Hapenzo - Event Decoration Services

A modern React application for event decoration services, featuring a responsive design and intuitive user interface.

## 🌟 Features

- **Modern UI Design**: Clean and responsive interface built with React
- **Package Browsing**: Browse through various decoration packages with detailed information
- **Shopping Cart**: Add packages to cart with quantity management
- **Order Management**: Complete checkout process with order confirmation
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🚀 Live Demo

Visit [Hapenzo](https://hapenzo.netlify.app) to see the live application.

## 🛠️ Technologies Used

- React 18
- React Router v6
- React Toastify
- Material Icons
- CSS3 with Flexbox/Grid
- Netlify for Deployment

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hapenzo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `build` folder.

## 📱 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## 📂 Project Structure

```
frontend/
  ├── public/
  │   ├── index.html
  │   └── ...
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

## 🎨 Features Overview

### Home Page
- Hero section with call-to-action
- Featured packages showcase
- Service highlights

### Packages
- Grid view of available packages
- Detailed package information
- Price and rating display

### Shopping Cart
- Add/remove items
- Quantity adjustment
- Price calculation with GST
- Checkout process

### Order Confirmation
- Order summary
- Customer details
- Event information

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=your_api_url_here
```

### Deployment
The project is configured for deployment on Netlify with the following settings in `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 📄 License

This project is licensed under the MIT License.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email support@hapenzo.com or raise an issue in the repository.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
#   H a p e n z o _ f r o n t e n d 
 
 