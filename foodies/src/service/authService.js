import axios from "axios";

const API_URL = "http://localhost:8080/api";

// ✅ Register User
export const registerUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/register`, data, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response;
  } catch (error) {
    console.error("Registration error:", error.response?.data || error.message);
    throw error;
  }
};

// ✅ Login User
export const login = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return response;
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};