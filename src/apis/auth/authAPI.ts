import { API_URL } from "../interceptor";

import { AuthFormValues } from "@/pages/signup/types";
import apiClient from "../interceptor";

export const authAPI = {
  checkEmail: async (email: string) => {
    const response = await apiClient.get(
      `${API_URL}/join/duplicate-email/${email}`
    );
    return response.data;
  },
  sendEmail: async (email: string) => {
    const response = await apiClient.post(`${API_URL}/join/send-email`, {
      email
    });
    return response.data;
  },
  verifyCode: async (email: string, code: string) => {
    const response = await apiClient.post(`${API_URL}/join/verify-code`, {
      email,
      code
    });
    return response.data;
  },
  signup: async (data: AuthFormValues) => {
    const addRole = {
      userId: data.userId,
      userPwd: data.userPwd,
      userRole: "ADMIN"
    };
    const response = await apiClient.post(`${API_URL}/join/register`, addRole);
    return response.data;
  },
  login: async (data: AuthFormValues) => {
    const response = await apiClient.post(`${API_URL}/login`, data);
    return response.data;
  }
};
