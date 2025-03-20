import axios from "axios";
import { API_URL } from "../interceptor";

import { AuthFormValues } from "@/pages/signup/types";

export const authAPI = {
  checkEmail: async (email: string) => {
    const response = await axios.get(
      `${API_URL}/join/duplicate-email/${email}`
    );
    return response.data;
  },
  sendEmail: async (email: string) => {
    const response = await axios.post(`${API_URL}/join/send-email`, { email });
    return response.data;
  },
  verifyCode: async (email: string, code: string) => {
    const response = await axios.post(`${API_URL}/join/verify-code`, {
      email,
      code
    });
    return response.data;
  },
  signup: async (data: AuthFormValues) => {
    const addRole = {
      userId: data.email,
      userPwd: data.password,
      userRole: "ADMIN"
    }
    const response = await axios.post(`${API_URL}/join/register`, addRole);
    return response.data;
  },
  login: async (data: AuthFormValues) => {
    const response = await axios.post(`${API_URL}/login`, data);
    return response.data;
  }
};
