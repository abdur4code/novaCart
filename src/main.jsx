import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRoutes />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      toastClassName="!bg-slate-900/90 !backdrop-blur-xl !border !border-white/10 !rounded-xl !shadow-2xl !shadow-indigo-500/10 !text-slate-200 !text-sm !font-medium"
      progressClassName="!bg-gradient-to-r !from-indigo-500 !to-purple-500"
    />
  </Provider>,
);
