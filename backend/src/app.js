require("dotenv").config()

const express = require("express")
const cors = require("cors")
const rateLimit = require("express-rate-limit")
const helmet = require("helmet")

const app = express()
app.use(helmet())

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  message: {
    message: "Terlalu banyak request. Silakan coba lagi nanti.",
  },
})

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  }),
)

app.use(express.json())

const healthRoutes = require("./routes/healthRoutes")
app.use("/api/health", healthRoutes);

const contactRoutes = require("./routes/contactRoutes")
app.use("/api/contact", contactLimiter, contactRoutes)

const notFound = require("./middleware/notFound")
app.use(notFound)

const errorHandler = require("./middleware/errorHandle")
app.use(errorHandler)

module.exports = app
