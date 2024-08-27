import DocumentUploadForm from "../Components/DocumentUploadForm"
const CandidateApplication = () => {
  return (
    <>

<div className="w-screen h-screen  text-white bg-black/90">

        <h1>Candidate Application</h1>
        <p>
          Please fill out the form below to submit your application.
        </p>
        <p>
          All fields are required.
        </p>
        <p>
          Please upload the following documents:
        </p>

      <DocumentUploadForm />
    </div>

    </>
  
  )
}

export default CandidateApplication
