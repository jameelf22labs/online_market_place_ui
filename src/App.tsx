import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./layouts";
import Home from "./features/home";
import LoginForm from "./features/auth/components/LoginForm";
import SignUpForm from "./features/auth/components/SignUpForm";

export default function App() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden"
      style={{
        fontFamily: 'Manrope, "Noto Sans", sans-serif',
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<SignUpForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
