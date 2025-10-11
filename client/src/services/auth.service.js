import api from "./api";
import TokenService from "./token.service";

const API_URL = import.meta.env.VITE_API_URL;

const register = async (user) => {
  return await api.post(`${API_URL}/auth/signup`, user);
};

const login = async (user) => {
  const response = await api.post(`${API_URL}/auth/signin`, user);
  // save user data to localstorage
  // check ว่ามี token อยู่ใน response หรือไม่ ถ้าไม่มีให้ return response ออกไป
  console.log("RESPONSE: ", response)
  if (!response.data.token) {
    return response;
  }

  TokenService.setUser(response.data);
  return response;
};

const logout = () => {
  TokenService.removeUser();
  // TokenService.removeToken();
};

const AuthService = {
  register,
  login,
  logout,
};

export default AuthService;
