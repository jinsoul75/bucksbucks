import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import App from "./App.tsx";
import Login from "./pages/login/Login.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import Calendar from "./pages/dashboard/Calendar.tsx";
import Statistics from "./pages/dashboard/Statistics.tsx";
import Signup from "./pages/signup/Signup.tsx";
import Layout from "@/components/layout/Layout.tsx";
import ModalContainer from "@/components/common/modal/ModalContainer.tsx";

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Calendar />} />
              <Route path="/dashboard/statistics" element={<Statistics />} />
            </Route>
          </Route>
        </Routes>
        <ModalContainer />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
