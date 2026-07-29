import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import AppRoutes from "./routes/AppRoutes";
  import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById("root")).render(
<Provider store={store}>
    <AppRoutes />
    <ToastContainer />
</Provider>
);
