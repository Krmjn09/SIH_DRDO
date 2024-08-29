import { useState } from "react"
import { toast , ToastContainer} from "react-toastify"
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
        Submit Aadhar Card
      </h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <input
            type="file"
            name="aadharCard"
            onChange={onAadharCardChange}
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 mt-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Submit Aadhar Card
        </button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default StudentId
