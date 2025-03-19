import { createBrowserRouter, Navigate } from "react-router-dom";

import Login from "@/pages/login/Login.tsx";
import Dashboard from "@/pages/dashboard/Dashboard.tsx";
import Calendar from "@/pages/dashboard/Calendar.tsx";
import Statistics from "@/pages/dashboard/Statistics.tsx";
import Signup from "@/pages/signup/Signup.tsx";
import Layout from "@/components/layout/Layout.tsx";

// 대시보드 관련 라우트
const dashboardRoutes = {
  path: "/dashboard",
  element: <Dashboard />,
  children: [
    {
      index: true,
      element: <Calendar />
    },
    {
      path: "statistics",
      element: <Statistics />
    }
  ]
};

// 인증 관련 라우트
const authRoutes = {
  element: <Layout />,
  children: [
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    }
  ]
};

// 메인 라우트 구성
const routes = [
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" replace={true} />
      },
      dashboardRoutes
    ]
  },
  authRoutes
];

const router = createBrowserRouter(routes);

export default router;
