import axios from "axios";

const apiClient = axios.create({
  // give the user URL can use
  baseURL: "http://localhost:4000/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerUser = async (user: any) => {
  try {
    const response = await apiClient.post("register", user);
    return response.data;
  } catch (error) {
    console.error("Error during user registration:", error);
    throw error;
  }
};

export const loginUser = async (login: any) => {
  try {
    const response = await apiClient.post("login", login); 
    return response.data;
  } catch (error) {
    console.error("Error during user login:", error);
    throw error;
  }
};

export const sendOtp = async (email: any) => {
  try {
    const response = await apiClient.post("email", { email }); 
    return response.data;
  } catch (error) {
    console.error("Error during sending email:", error);
    throw error;
  }
};

export const verifyOtp = async (email: string, otp: string) => {
  try {
    const response = await apiClient.get(`verifyOtp/${email}/${otp}`);
    return response.data;
  } catch (error) {
    console.error("Error during OTP verification:", error);
    throw error;
  }
};

export const changePassword = async (email: string, password: string) => {
  try {
    const response = await apiClient.post("changePassword", { email, password }); 
    return response.data;
  } catch (error) {
    console.error("Error during password change:", error);
    throw error;
  }
};