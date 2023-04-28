import React from "react"
import ReactDOM from "react-dom/client"
import { Helmet, HelmetProvider } from "react-helmet-async"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        {/*
          Overrider removes all tags inside <head>, so GP links won't show
          mobile layout in phones. This fixes that.
         */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>
)
