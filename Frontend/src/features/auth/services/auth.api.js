import axios from "axios"

// ✅ axios instance
const api = axios.create({
  baseURL: "https://ai-resume-analyzer-wv6i.onrender.com",
  withCredentials: true
})

// ✅ REGISTER
export async function register({ username, email, password }) {
  try {
    const response = await api.post("/api/auth/register", {
      username,
      email,
      password
    })

    return response.data
  } catch (err) {
    console.log("Register Error:", err.response?.data || err.message)
    return null
  }
}

// ✅ LOGIN
export async function login({ email, password }) {
  try {
    const response = await api.post("/api/auth/login", {
      email,
      password
    })

    return response.data
  } catch (err) {
    console.log("Login Error:", err.response?.data || err.message)
    return null
  }
}

// ✅ LOGOUT
export async function logout() {
  try {
    const response = await api.get("/api/auth/logout")
    return response.data
  } catch (err) {
    console.log("Logout Error:", err.response?.data || err.message)
    return null
  }
}

// ✅ GET CURRENT USER
export async function getMe() {
  try {
    const response = await api.get("/api/auth/get-me")
    return response.data
  } catch (err) {
    console.log("GetMe Error:", err.response?.data || err.message)
    return null   // 👈 MOST IMPORTANT FIX
  }
}