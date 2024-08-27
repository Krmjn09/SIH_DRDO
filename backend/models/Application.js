const mongoose = require("mongoose")

// Define schema and model
const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  documents: {
    collegeId: { type: String, required: false },
    aadhaarCard: { type: String, required: false },
    resume: { type: String, required: false },
    tenthCertificate: { type: String, required: false },
    twelfthCertificate: { type: String, required: false },
  },
})

const Application = mongoose.model("Application", applicationSchema)

module.exports = Application
