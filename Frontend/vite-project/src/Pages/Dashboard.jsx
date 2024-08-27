import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center text-white bg-black/90">
      <div className="w-full max-w-[600px] mx-auto text-center">
        <h1 className="text-6xl mb-4">Smart India Hackathon SIH</h1>
        <p className="text-xl mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          error, culpa quidem ipsa sit amet sint ratione aliquid laborum
          quibusdam aperiam soluta? Inventore ad assumenda harum voluptas
          architecto nesciunt aperiam!
        </p>
        <div>
          <Link to="/Candidate">
            <button className="bg-white/80 px-4 py-2 rounded-lg text-xl text-black">
              Are you a candidate
            </button>
          </Link>
          <Link to="/checkuser">
            <button className="bg-white/80 px-4 py-2 rounded-lg text-xl ml-4 text-black">
              Are you an interviewer?
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
