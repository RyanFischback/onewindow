import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

console.log("Root element:", rootElement);
