const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

// ✅ middlewares
app.use(express.json())
app.use(cookieParser())

// ✅ CORS (FINAL FIX)
app.use(cors({
  origin: true,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}))

// ✅ IMPORTANT: preflight request fix
app.options("*", cors())

/* require all the routes here */
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")

/* using all the routes here */
app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)

module.exports = app