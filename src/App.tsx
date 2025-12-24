import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalContextWrapper } from './Context/GlobalContext';
import ChatbotPage from './components/ChatbotPage/ChatbotPage';

function App() {
  return (
    <GlobalContextWrapper>
      <ChatbotPage />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </GlobalContextWrapper>
  );
}

export default App;
