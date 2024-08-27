const express = require("express")
const multer = require("multer")
const path = require("path")
const Application = require("../models/Application")

const router = express.Router()

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/")
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  },
})
const upload = multer({ storage })

// API endpoint for form submission
router.post(
  "/submit-application",
  upload.fields([
    { name: "collegeId", maxCount: 1 },
    { name: "aadhaarCard", maxCount: 1 },
    { name: "resume", maxCount: 1 },
    { name: "tenthCertificate", maxCount: 1 },
    { name: "twelfthCertificate", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const { name, email, phone } = req.body
      if (!name || !email || !phone) {
        return res
          .status(400)
          .json({ message: "All form fields are required." })
      }

      const documents = {
        collegeId: req.files["collegeId"] ? req.files["collegeId"][0].path : "",
        aadhaarCard: req.files["aadhaarCard"]
          ? req.files["aadhaarCard"][0].path
          : "",
        resume: req.files["resume"] ? req.files["resume"][0].path : "",
        tenthCertificate: req.files["tenthCertificate"]
          ? req.files["tenthCertificate"][0].path
          : "",
        twelfthCertificate: req.files["twelfthCertificate"]
          ? req.files["twelfthCertificate"][0].path
          : "",
      }

      const newApplication = new Application({ name, email, phone, documents })
      await newApplication.save()

      res.status(200).json({ message: "Application submitted successfully!" })
    } catch (error) {
      console.error("Error submitting application:", error)
      res
        .status(500)
        .json({ message: "Failed to submit application", error: error.message })
    }
  }
)

// GET endpoint to fetch all applications
router.get("/applications", async (req, res) => {
  try {
    const applications = await Application.find()
    res.status(200).json(applications)
  } catch (error) {
    console.error("Error fetching applications:", error)
    res
      .status(500)
      .json({ message: "Failed to fetch applications", error: error.message })
  }
})

module.exports = router
