const express = require("express")
const mongoose = require("mongoose")
const usersRouter = require("./route/users")

// Load environment variables
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err))

// Middleware to parse JSON
app.use(express.json())

// Routes
app.use("/route/users", usersRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
