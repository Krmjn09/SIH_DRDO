const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
require("dotenv").config() // Load environment variables

// Initialize Express app
const app = express()
const port = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// MongoDB connection
const mongoUri = process.env.MONGO_URI // Use environment variable
mongoose
  .connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err))

// Import and use routes
const applicationRoutes = require("./routes/ApplicationRoutes")
app.use("/api", applicationRoutes)

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
