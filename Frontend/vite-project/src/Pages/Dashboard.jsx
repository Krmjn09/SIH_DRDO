import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react"

export default function Home() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()

  useEffect(() => {
    if (isAuthenticated && user) {
      // Send user data to the backend
      fetch("http://localhost:5000/route/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("User saved:", data)
        })
        .catch((error) => {
          console.error("Error saving user:", error)
        })
    }
  }, [isAuthenticated, user])

  const handleClick = (path) => {
    if (!isAuthenticated) {
      alert("Please log in first to continue.")
    } else {
      window.location.href = path
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center text-white bg-black/90 relative">
      <div className="">
        {isAuthenticated ? (
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="bg-red-600 px-4 py-2 rounded-lg text-white hover:bg-red-700 absolute top-4 right-4"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className="bg-blue-700 px-4 py-2 rounded-lg  text-white hover:bg-blue-600 absolute top-4 left-4"
          >
            Log In
          </button>
        )}
      </div>

      <div className="w-full max-w-[600px] mx-auto text-center">
        <h1 className="text-6xl mb-4">Smart India Hackathon SIH</h1>
        <p className="text-xl mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          error, culpa quidem ipsa sit amet sint ratione aliquid laborum
          quibusdam aperiam soluta? Inventore ad assumenda harum voluptas
          architecto nesciunt aperiam!
        </p>
        <div>
          <button
            onClick={() => handleClick("/Candidate")}
            className="bg-blue-700 px-4 py-2 rounded-lg text-xl text-white hover:bg-blue-600"
          >
            Are you a candidate
          </button>
          <button
            onClick={() => handleClick("/Interviewer")}
            className="bg-blue-700 px-4 py-2 rounded-lg text-xl ml-4 text-white hover:bg-blue-600"
          >
            Are you an interviewer?
          </button>
        </div>
      </div>
    </div>
  )
}
