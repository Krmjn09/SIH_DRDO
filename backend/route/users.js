const express = require("express")
const router = express.Router()
const User = require("../models/user.model")


// POST route to add or update a user
router.post("/add", async (req, res) => {
  const { name, email } = req.body

  try {
    // Find if the user already exists
    let user = await User.findOne({ email })

    if (user) {
      // If user exists, update their name
      user.name = name
      await user.save()
      return res.status(200).json("User updated successfully!")
    } else {
      // If user does not exist, create a new one
      const newUser = new User({ name, email })
      await newUser.save()
      return res.status(201).json("User added successfully!")
    }
  } catch (err) {
    return res.status(400).json(`Error: ${err}`)
  }
})

module.exports = router
