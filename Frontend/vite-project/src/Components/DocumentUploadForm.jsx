import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const DocumentUploadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    collegeId: null,
    aadhaarCard: null,
    resume: null,
    tenthCertificate: null,
    twelfthCertificate: null,
  })

  const [uploadedFiles, setUploadedFiles] = useState({
    collegeId: false,
    aadhaarCard: false,
    resume: false,
    tenthCertificate: false,
    twelfthCertificate: false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    setFormData({ ...formData, [name]: files[0] })
    setUploadedFiles({ ...uploadedFiles, [name]: false })
  }

  const handleVerify = (fileName) => {
    if (formData[fileName]) {
      toast.success(
        `${fileName
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase())} verified successfully!`
      )
      setUploadedFiles({ ...uploadedFiles, [fileName]: true })
    } else {
      toast.error(
        `No file selected for ${fileName
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase())}`
      )
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    toast.info("Form submitted! (This is a placeholder, no backend connection)")
    // Reset form data
    setFormData({
      name: "",
      email: "",
      phone: "",
      collegeId: null,
      aadhaarCard: null,
      resume: null,
      tenthCertificate: null,
      twelfthCertificate: null,
    })
    setUploadedFiles({
      collegeId: false,
      aadhaarCard: false,
      resume: false,
      tenthCertificate: false,
      twelfthCertificate: false,
    })
  }

  return (
    <div className="w-screen h-screen items-center p-4">
      <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4 text-center">Document Upload Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          {[
            "collegeId",
            "aadhaarCard",
            "resume",
            "tenthCertificate",
            "twelfthCertificate",
          ].map((fileName) => (
            <div key={fileName} className="mb-4">
              <label htmlFor={fileName} className="block text-gray-700">
                {fileName
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </label>
              <input
                type="file"
                id={fileName}
                name={fileName}
                onChange={handleFileChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                type="button"
                onClick={() => handleVerify(fileName)}
                className="ml-2 bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Verify
              </button>
              {uploadedFiles[fileName] && (
                <span className="ml-2 text-green-600">Verified</span>
              )}
            </div>
          ))}

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  )
}

export default DocumentUploadForm
