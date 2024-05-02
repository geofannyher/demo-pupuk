import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./pages/auth/auth.layout";
import Login from "./pages/auth/login";
import ChatPage from "./pages/Chat";
import MainLayout from "./pages/main.layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route path="chat" element={<ChatPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
