import Data from "../Components/Data"
import ResumeForm from "../Components/Resume"
import Aadhar from "../Components/Aadhar"
import StudentId from "../Components/StudentId"

const CandidateApplication = () => {
  return (
    <>
      {" "}
      <div className=" bg-gray-900">
        <h1 className="text-4xl font-bold text-white mb-10 text-center">
          Candidate Application
        </h1>
        <Data />
        <ResumeForm />
        <Aadhar />
        <StudentId />
      </div>
    </>
  )
}

export default CandidateApplication
