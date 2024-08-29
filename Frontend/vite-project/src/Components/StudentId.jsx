import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"

const StudentId = () => {
  const [aadharCard, setAadharCard] = useState(null)

  const onAadharCardChange = (e) => {
    setAadharCard(e.target.files[0])
  }

  const resetForm = () => {
    setAadharCard(null)
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const formDataToSend = new FormData()
    if (aadharCard) {
      formDataToSend.append("aadharCard", aadharCard)
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/forms/submit/aadhar",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      console.log(res.data)
      toast.success("Aadhar Card submitted successfully!")
      resetForm()
    } catch (err) {
      console.error(err)
      toast.error("Failed to submit Aadhar Card.")
    }
  }

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-6">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Verify Student Id
      </h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4 flex items-center">
          <input
            type="file"
            name="aadharCard"
            onChange={onAadharCardChange}
            className="p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mr-4"
            required
          />
          <button
            type="submit"
            className="py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Verify Student Id
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default StudentId
