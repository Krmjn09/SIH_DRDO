import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css" // Import Tailwind CSS
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-1sfof15cep77kds0.us.auth0.com"
    clientId="zi38KyUldVhsYwz1CGQqx3HPS6N9rMoV"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <React.StrictMode>
    <App />
    </React.StrictMode>
    
  </Auth0Provider>,
)
