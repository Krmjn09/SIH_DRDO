import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import PropTypes from "prop-types" // Add this line to import PropTypes
import "react-toastify/dist/ReactToastify.css"

const InputField = ({ label, type, value, onChange }) => {
  InputField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }
  return (
    <div className="mb-4">
      <label className="block text-white mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}

const Data = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success("Form submitted successfully!")
    // Add your form submission logic here
  }

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-6">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Data Form
      </h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Data
