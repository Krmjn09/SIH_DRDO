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
  })

  const [uploadedFiles, setUploadedFiles] = useState({
    collegeId: false,
    aadhaarCard: false,
  })

  const [step, setStep] = useState(1)

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
    toast.info("Form submitted! (This is a placeholder, no backend connection)")
    setFormData({
      name: "",
      email: "",
      phone: "",
      collegeId: null,
      aadhaarCard: null,
    })
    setUploadedFiles({
      collegeId: false,
      aadhaarCard: false,
    })
    setStep(1)
  }

  const handleNextStep = () => {
    if (step === 2 && !uploadedFiles.collegeId) {
      toast.error("Please verify the College ID before proceeding.")
      return
    }
    if (step === 3 && !uploadedFiles.aadhaarCard) {
      toast.error("Please verify the Aadhaar Card before submitting.")
      return
    }
    setStep(step + 1)
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100vw",
        backgroundColor: "white",
        padding: "2rem",
        overflowX: "hidden", // Prevent horizontal scrolling
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          backgroundColor: "#fff",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          borderRadius: "0.5rem",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            fontSize: "1.75rem",
            textAlign: "left",
            color: "#333",
            marginTop: "2rem",
          }}
        >
          Document Upload Form
        </h2>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          {step === 1 && (
            <>
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  htmlFor="name"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "#555",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #ccc",
                    borderRadius: "0.25rem",
                    boxSizing: "border-box",
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "#555",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #ccc",
                    borderRadius: "0.25rem",
                    boxSizing: "border-box",
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  htmlFor="phone"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "#555",
                  }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "1px solid #ccc",
                    borderRadius: "0.25rem",
                    boxSizing: "border-box",
                  }}
                  required
                />
              </div>

              <div style={{ textAlign: "left" }}>
                <button
                  type="button"
                  onClick={handleNextStep}
                  style={{
                    backgroundColor: "#3182ce",
                    color: "#fff",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "0.25rem",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Next
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div
                style={{
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "flex-start",
                }}
              >
                <div style={{ flex: 1 }}>
                  <label
                    htmlFor="collegeId"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      color: "#555",
                    }}
                  >
                    College ID
                  </label>
                  <input
                    type="file"
                    id="collegeId"
                    name="collegeId"
                    onChange={handleFileChange}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #ccc",
                      borderRadius: "0.25rem",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div style={{ marginLeft: "2rem" }}>
                  <button
                    type="button"
                    onClick={() => handleVerify("collegeId")}
                    style={{
                      backgroundColor: "#38a169",
                      color: "#fff",
                      padding: "0.75rem 1rem",
                      borderRadius: "0.25rem",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Verify
                  </button>
                  {uploadedFiles.collegeId && (
                    <span
                      style={{
                        marginLeft: "0.5rem",
                        color: "#38a169",
                        fontWeight: "bold",
                      }}
                    >
                      Verified
                    </span>
                  )}
                </div>
              </div>
              <div style={{ textAlign: "left" }}>
                <button
                  type="button"
                  onClick={handleNextStep}
                  style={{
                    backgroundColor: "#3182ce",
                    color: "#fff",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "0.25rem",
                    border: "none",
                    cursor: "pointer",
                  }}
                  disabled={!uploadedFiles.collegeId}
                >
                  Next
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div
                style={{
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "flex-start",
                }}
              >
                <div style={{ flex: 1 }}>
                  <label
                    htmlFor="aadhaarCard"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      color: "#555",
                    }}
                  >
                    Aadhaar Card
                  </label>
                  <input
                    type="file"
                    id="aadhaarCard"
                    name="aadhaarCard"
                    onChange={handleFileChange}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #ccc",
                      borderRadius: "0.25rem",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div style={{ marginLeft: "2rem" }}>
                  <button
                    type="button"
                    onClick={() => handleVerify("aadhaarCard")}
                    style={{
                      backgroundColor: "#38a169",
                      color: "#fff",
                      padding: "0.75rem 1rem",
                      borderRadius: "0.25rem",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Verify
                  </button>
                  {uploadedFiles.aadhaarCard && (
                    <span
                      style={{
                        marginLeft: "0.5rem",
                        color: "#38a169",
                        fontWeight: "bold",
                      }}
                    >
                      Verified
                    </span>
                  )}
                </div>
              </div>
              <div style={{ textAlign: "left" }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#3182ce",
                    color: "#fff",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "0.25rem",
                    border: "none",
                    cursor: "pointer",
                  }}
                  disabled={!uploadedFiles.aadhaarCard}
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </form>
        <ToastContainer />
      </div>
    </div>
  )
}

export default DocumentUploadForm