import { ToastContainer } from "react-toastify";
import './App.css';
import { AuthProvider } from "./context";
import { Navigation } from "./router";

function App() {

  return (
    <AuthProvider>
      <Navigation />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </AuthProvider>
  )
}

export default App;
